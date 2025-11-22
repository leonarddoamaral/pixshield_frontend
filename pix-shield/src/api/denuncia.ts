import { http } from "./clientDenuncias";
import type { Denuncia, contagemDenuncia } from "../types";


type DenunciaId = number;
type DenunciaValor_chave = string
type id_usuario = number

export const DenunciaAPI = {
     list: () =>
       http<Denuncia[]>("/denuncias"),
   
     get: (id: DenunciaId) =>
       http<Denuncia>(`/denuncias/${id}`),

     getDenunciasByUserId: (id_usuario: id_usuario) =>
      http<Denuncia[]>(`/denuncias/pesquisar/usu/${id_usuario}`),
     
     buscar: (valor_chave: DenunciaValor_chave ) =>
      http<Denuncia[]>(`/denuncias/pesquisar/${valor_chave}`),

     contagem: ()=>
        http<contagemDenuncia>('/denuncias/contador'),
   
     create: (
       payload: Omit<
         Denuncia,
         "id_denuncia" | "data_denuncia" | "nome_usuario" | "id_chave_fk"
       >
     ) =>
       http<Denuncia>("/denuncias", { 
         method: "POST",
         body: JSON.stringify(payload),
       }),
        

       
}