<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import type { SkillGroup } from '@/types/skill'

const props = defineProps<{
  groups: SkillGroup[]
}>()

const containerRef = ref<HTMLDivElement>()
const wrapperRef = ref<HTMLDivElement>()

let graph: any = null
let resizeObserver: ResizeObserver | null = null
const hoverId = ref<string | null>(null)

interface OverlayNode {
  id: string
  name: string
  icon: string
  color: string
  isGroup: boolean
}

const overlayNodes: OverlayNode[] = []
const links: { source: string; target: string }[] = []
const adj: Record<string, string[]> = {}

props.groups.forEach((g, gi) => {
  const gid = `g-${gi}`
  overlayNodes.push({
    id: gid,
    name: g.title,
    icon: g.icon,
    color: g.color,
    isGroup: true,
  })
  adj[gid] = []
  g.skills.forEach((s, si) => {
    const sid = `s-${gi}-${si}`
    overlayNodes.push({
      id: sid,
      name: s.name,
      icon: s.icon,
      color: g.color,
      isGroup: false,
    })
    links.push({ source: gid, target: sid })
    adj[gid]!.push(sid)
    adj[sid] = [gid]
  })
})

function isConnected(id: string): boolean {
  if (!hoverId.value) return true
  if (id === hoverId.value) return true
  return adj[hoverId.value]?.includes(id) ?? false
}

onMounted(async () => {
  const ForceGraphMod: any = await import('force-graph')
  const ForceGraph = ForceGraphMod.default

  const el = containerRef.value!

  const graphNodes = overlayNodes.map((n) => ({
    id: n.id,
    val: n.isGroup ? 22 : 8,
  }))

  graph = new ForceGraph(el)
    .graphData({ nodes: graphNodes, links })
    .width(el.clientWidth)
    .height(540)
    .backgroundColor('rgba(0,0,0,0)')
    .nodeCanvasObject(() => {})
    .nodeLabel(() => '')
    .linkColor((l: any) => {
      const src = typeof l.source === 'object' ? l.source : null
      const srcId = src?.id || l.source
      const tgtId =
        typeof l.target === 'object' ? l.target?.id : l.target
      const c =
        overlayNodes.find((n) => n.id === srcId)?.color || '#888'
      if (hoverId.value) {
        return srcId === hoverId.value || tgtId === hoverId.value
          ? c + 'aa'
          : c + '15'
      }
      return c + '45'
    })
    .linkWidth((l: any) => {
      if (!hoverId.value) return 0.5
      const srcId =
        typeof l.source === 'object' ? l.source?.id : l.source
      const tgtId =
        typeof l.target === 'object' ? l.target?.id : l.target
      return srcId === hoverId.value || tgtId === hoverId.value
        ? 1.5
        : 0.2
    })
    .linkDirectionalParticles(0)
    .d3AlphaDecay(0.02)
    .d3VelocityDecay(0.3)
    .enableNodeDrag(true)
    .enableZoomInteraction(true)
    .onNodeHover((node: any) => {
      hoverId.value = node?.id ?? null
    })
    .onEngineStop(() => graph?.zoomToFit(400, 80))
    .onRenderFramePost(() => {
      for (const gn of graphNodes) {
        if (gn.x === undefined || gn.y === undefined) continue
        const pos = graph.graph2ScreenCoords(gn.x, gn.y)
        const overlay = document.getElementById(`ov-${gn.id}`)
        if (!overlay) continue
        overlay.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      }
    })

  const linkForce = graph.d3Force('link')
  if (linkForce) linkForce.distance(220)

  resizeObserver = new ResizeObserver(() => {
    if (graph && el) graph.width(el.clientWidth)
  })
  resizeObserver.observe(el)
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  const el = containerRef.value
  if (el) el.innerHTML = ''
})
</script>

<template>
  <div ref="wrapperRef" class="relative w-full" style="height: 540px">
    <div ref="containerRef" class="absolute inset-0" />
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="node in overlayNodes"
        :key="node.id"
        :id="`ov-${node.id}`"
        class="absolute overlay-node"
        :class="[
          node.isGroup ? 'overlay-group' : 'overlay-skill',
          {
            'overlay-active': hoverId === node.id,
            'overlay-dimmed':
              hoverId && hoverId !== node.id && !isConnected(node.id),
          },
        ]"
        :style="{ left: 0, top: 0, color: node.color }"
      >
        <div v-if="node.isGroup" class="group-node">
          <Icon :icon="node.icon" class="group-icon" />
        </div>
        <div v-else class="skill-node">
          <Icon :icon="node.icon" class="skill-icon" />
        </div>
        <span v-if="node.isGroup" class="group-label">{{
          node.name
        }}</span>
        <span v-else class="skill-label">{{ node.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.group-node {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  transition: box-shadow 0.2s;
}

.group-icon {
  font-size: 22px;
  color: #fff;
}

.group-label {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: 24px;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text);
  white-space: nowrap;
  text-align: center;
}

.skill-node {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  transition: all 0.2s;
}

.skill-icon {
  font-size: 16px;
  color: currentColor;
}

.skill-label {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: 18px;
  transform: translateX(-50%);
  font-size: 11px;
  font-weight: 500;
  color: var(--color-text-secondary);
  white-space: nowrap;
  text-align: center;
  opacity: 0;
  transition: opacity 0.15s;
  pointer-events: none;
}

.overlay-active .skill-label {
  opacity: 1;
}

.overlay-active .skill-node {
  border-width: 3px;
  box-shadow: 0 0 12px currentColor;
}

.overlay-active .group-node {
  box-shadow: 0 0 16px currentColor;
}

.overlay-active .group-label {
  color: currentColor;
  font-weight: 700;
}

.overlay-dimmed {
  opacity: 0.12;
  transition: opacity 0.2s;
}
</style>
