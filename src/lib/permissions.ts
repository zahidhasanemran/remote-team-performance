/**
 * 
Used by UI & backend
Central source of truth
 */



export function canEditProject(role: string) {
  return role === 'admin'
}
