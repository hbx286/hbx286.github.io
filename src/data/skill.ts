import type { SkillGroup } from '@/types/skill'

export const skills: SkillGroup[] = [
  {
    title: 'Python 生态',
    icon: 'devicon:python',
    color: '#3b82f6',
    skills: [
      { name: 'FastAPI', icon: 'devicon:fastapi' },
      { name: 'SQLAlchemy', icon: 'devicon:sqlalchemy' },
      { name: 'Flask', icon: 'devicon:flask' },
      { name: 'Pandas', icon: 'devicon:pandas' },
    ],
  },

  {
    title: 'Go 生态',
    icon: 'devicon:go',
    color: '#06b6d4',
    skills: [{ name: 'Gin', icon: 'logos:gin' }],
  },

  {
    title: '数据库',
    icon: 'mdi:database',
    color: '#10b981',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon:postgresql' },
      { name: 'MySQL', icon: 'devicon:mysql' },
      { name: 'Redis', icon: 'devicon:redis' },
      { name: 'MongoDB', icon: 'devicon:mongodb' },
    ],
  },

  {
    title: '数据工程',
    icon: 'ep:data-analysis',
    color: '#f59e0b',
    skills: [
      { name: 'Doris', icon: 'simple-icons:apachedoris' },
      { name: 'Clickhouse', icon: 'devicon:clickhouse' },
      { name: 'Kafka', icon: 'devicon:apachekafka' },
    ],
  },

  // {
  //   title: 'AI 开发',
  //   icon: 'mdi:robot-outline',
  //   color: '#8b5cf6',
  //   skills: [
  //     { name: 'LangGraph', icon: 'mdi:graph-outline' },
  //     { name: 'MCP', icon: 'mdi:connection' },
  //     { name: 'Agent', icon: 'mdi:robot-industrial' },
  //     { name: 'Prompt', icon: 'mdi:message-text-outline' },
  //   ],
  // },

  // {
  //   title: '容器编排',
  //   icon: 'mdi:cloud',
  //   color: '#ec4899',
  //   skills: [
  //     { name: 'Docker', icon: 'mdi:docker' },
  //     { name: 'Kubernetes', icon: 'mdi:kubernetes' },
  //   ],
  // },

  // {
  //   title: '系统运维',
  //   icon: 'mdi:linux',
  //   color: '#64748b',
  //   skills: [
  //     { name: 'Linux', icon: 'mdi:linux' },
  //     { name: 'Nginx', icon: 'mdi:server' },
  //   ],
  // },
]
