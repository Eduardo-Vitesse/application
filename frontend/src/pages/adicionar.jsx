import React, { useState, useEffect } from 'react'
import styles from '../styles/Adicionar.module.css'
import { useForm } from 'react-hook-form';
import api from '../services/api';
import Router from 'next/router'

export default function Adicionar() {
    const { register, handleSubmit } = useForm()
    const [ id, setId ] = useState([])

    useEffect(async () => {
        const res = await api.get('/lista_duvidas')
        setId(res.data)
    }, [id])

    const onSubmit = async (data) => {
        await api.post('/lista_duvidas', {
            "id": id.length + 1,
            "titulo": data.pergunta,
            "descricao": data.resposta
        })
        Router.push('/')
    };


    return (
        <section className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <input 
                    {...register("pergunta")}
                    name="pergunta" 
                    type="text" 
                    placeholder="Adicione uma pergunta"/>
                <textarea 
                    {...register("resposta")}
                    name="resposta" 
                    cols="30" rows="10" 
                    placeholder="Adicione a resposta"/>
                <button type="submit">Salvar</button>
            </form>
        </section>
    )
}
