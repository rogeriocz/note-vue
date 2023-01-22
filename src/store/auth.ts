import { defineStore } from "pinia";

const useAuth = defineStore("auth", {
    state: () => {
        return {
            token: null,
            baseUrl: "http://127.0.0.1:8000/api",
        };
    },
    actions: {
        async register(name: string, email: string, password: string) {
            const uri = `${this.baseUrl}/auth/register`;
            const rawResponse = await fetch(uri, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                    'Accept': "Application/json",
                },
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'password': password,
                }),
            });
            const response = await rawResponse.json();
            // TODO: Manage response
        },
        async login(email: string, password: string) {
            const uri = `${this.baseUrl}/auth/login`;
            const rawResponse = await fetch(uri, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                    'Accept': "Application/json",
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password,
                }),
            });
            const response = await rawResponse.json();
            // TODO: Manage response
        },
        async getNotes() {
            const uri = `${this.baseUrl}/note`;
            const rawResponse = await fetch(uri, {
                method: "GET",
                headers: {
                    'Content-Type': "Application/json",
                    'Accept': "Application/json",
                    'Authorization': `Bearer ${this.token}`,
                },
            });
            const response = await rawResponse.json()
        },
        async createNote(content: string) {
            const uri = `${this.baseUrl}/note`
            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': "Application/json",
                    'Accept': "Application/json",
                    'Authorization': `Bearer ${this.token}`,
                },
                body: JSON.stringify({
                    'content': content
                })
            })
            const response = await rawResponse.json()
        },
    },
});

export default useAuth;
