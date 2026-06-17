import type { SkillGroup } from '@/types/skill'

export const skills: SkillGroup[] = [
  {
    title: 'Python 生态',
    icon: 'mdi:language-python',
    color: '#3b82f6',
    skills: [
      { name: 'Python', icon: 'mdi:language-python' },
      { name: 'FastAPI', icon: 'mdi:lightning-bolt' },
      { name: 'SQLAlchemy', icon: 'mdi:database-cog' },
      { name: 'Asyncio', icon: 'mdi:sync' },
    ],
  },

  {
    title: 'Go 生态',
    icon: 'mdi:language-go',
    color: '#06b6d4',
    skills: [
      { name: 'Go', icon: 'mdi:language-go' },
      { name: 'Gin', icon: 'mdi:web' },
    ],
  },

  {
    title: '数据库',
    icon: 'mdi:database',
    color: '#10b981',
    skills: [
      { name: 'PostgreSQL', icon: 'mdi:postgres' },
      { name: 'MySQL', icon: 'mdi:mysql' },
    ],
  },

  {
    title: '数据工程',
    icon: 'mdi:transfer',
    color: '#f59e0b',
    skills: [
      { name: 'Doris', icon: 'mdi:chart-box-outline' },
      { name: 'ETL', icon: 'mdi:swap-horizontal-bold' },
      { name: '数仓建模', icon: 'mdi:store-outline' },
      { name: '指标体系', icon: 'mdi:ruler-square-compass' },
    ],
  },

  {
    title: 'AI 开发',
    icon: 'mdi:robot-outline',
    color: '#8b5cf6',
    skills: [
      { name: 'LangGraph', icon: 'mdi:graph-outline' },
      { name: 'MCP', icon: 'mdi:connection' },
      { name: 'Agent', icon: 'mdi:robot-industrial' },
      { name: 'Prompt', icon: 'mdi:message-text-outline' },
    ],
  },

  {
    title: '容器编排',
    icon: 'mdi:kubernetes',
    color: '#ec4899',
    skills: [
      { name: 'Docker', icon: 'mdi:docker' },
      { name: 'Kubernetes', icon: 'mdi:kubernetes' },
    ],
  },

  {
    title: '系统运维',
    icon: 'mdi:linux',
    color: '#64748b',
    skills: [
      { name: 'Linux', icon: 'mdi:linux' },
      { name: 'Nginx', icon: 'mdi:server' },
    ],
  },
]