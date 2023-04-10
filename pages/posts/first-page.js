import Head from 'next/head'
import Link from 'next/link'

export default function FirstPage() {
    return (
        <div style = {{backgroundImage: "url('https://i.pinimg.com/564x/e2/c6/0d/e2c60d8309e9741306e1ffb7df846e0b.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
            <h2>Hi there!</h2> 
            <h3>I'm insyirah ☆</h3>
            <Link href="/">Back to home</Link>
        </div>
    )
}