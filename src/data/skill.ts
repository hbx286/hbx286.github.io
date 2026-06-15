import type { SkillGroup } from '@/types/skill'

export const skills: SkillGroup[] = [
  {
    title: '后端开发',
    icon: 'mdi:code-braces',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Asyncio'],
  },

  {
    title: '数据平台',
    icon: 'mdi:database',
    skills: ['Doris', 'MySQL', 'ETL', '指标体系', '数仓建模'],
  },

  {
    title: 'AI 探索',
    icon: 'mdi:robot-outline',
    skills: ['LangGraph', 'MCP', 'Agent', 'Prompt'],
  },

  {
    title: '基础设施',
    icon: 'mdi:kubernetes',
    skills: ['Docker', 'Kubernetes', 'Linux', 'Nginx'],
  },
]
