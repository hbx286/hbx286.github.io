export interface Skill {
  name: string
  icon: string
}

export interface SkillGroup {
  title: string
  icon: string
  color: string
  skills: Skill[]
}
