export type User = {
    id_usuario: number;
    nome_usuario: string;
    email_usuario: string;
    telefone_usuario: string;
    senha_usuario: string;
}

export type LoginResponse = {
    mensagem : string
}