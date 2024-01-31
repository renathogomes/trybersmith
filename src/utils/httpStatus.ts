export default function statusHTTP(status: string): number {
  // Mapa de correspondência entre status e códigos HTTP
  const HTTPmap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SUCCESSFUL: 200,
    CREATED: 201,
  };
    
  // Retorna o código HTTP correspondente ou 500 se não houver correspondência
  return HTTPmap[status] ?? 500;
}
