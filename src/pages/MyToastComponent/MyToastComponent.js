import React from 'react'
import { toast } from '../../components/Toast/ZenToast'
import './MyToastComponent.scss'

const MyToastComponent = () => {
    return (
        <div className='toast-demo-container' >

            <h1>
                Zen Toast Demo
            </h1>

            <section>
                <h2>Top-Left</h2>
                <div className="buttons">
                    <button onClick={() => { toast.error('Error', { position: 'top-left' }) }}>Error</button>
                    <button onClick={() => { toast.info('Information', { position: 'top-left' }) }}>Info</button>
                    <button onClick={() => { toast.success('Success', { position: 'top-left' }) }}>Success</button>
                    <button onClick={() => { toast.warn('Warning', { position: 'top-left' }) }}>Warn</button>
                </div>
            </section>

            <section>
                <h2>Top-Center</h2>
                <div className="buttons">
                    <button onClick={() => { toast.error('Error', { position: 'top-center' }) }}>Error</button>
                    <button onClick={() => { toast.info('Information', { position: 'top-center' }) }}>Info</button>
                    <button onClick={() => { toast.success('Success', { position: 'top-center' }) }}>Success</button>
                    <button onClick={() => { toast.warn('Warning', { position: 'top-center' }) }}>Warn</button>
                </div>
            </section>

            <section>
                <h2>Top-Right</h2>
                <div className="buttons">
                    <button onClick={() => { toast.error('Error') }}>Error</button>
                    <button onClick={() => { toast.info('Information') }}>Info</button>
                    <button onClick={() => { toast.success('Success') }}>Success</button>
                    <button onClick={() => { toast.warn('Warning') }}>Warn</button>
                </div>
            </section>

            <section>
                <h2>Bottom-Left</h2>
                <div className="buttons">
                    <button onClick={() => { toast.error('Error', { position: 'bottom-left' }) }}>Error</button>
                    <button onClick={() => { toast.info('Information', { position: 'bottom-left' }) }}>Info</button>
                    <button onClick={() => { toast.success('Success', { position: 'bottom-left' }) }}>Success</button>
                    <button onClick={() => { toast.warn('Warning', { position: 'bottom-left' }) }}>Warn</button>
                </div>
            </section>

            <section>
                <h2>Bottom-Center</h2>
                <div className="buttons">
                    <button onClick={() => { toast.error('Error', { position: 'bottom-center' }) }}>Error</button>
                    <button onClick={() => { toast.info('Information', { position: 'bottom-center' }) }}>Info</button>
                    <button onClick={() => { toast.success('Success', { position: 'bottom-center' }) }}>Success</button>
                    <button onClick={() => { toast.warn('Warning', { position: 'bottom-center' }) }}>Warn</button>
                </div>
            </section>

            <section>
                <h2>Bottom-Right</h2>
                <div className="buttons">
                    <button onClick={() => { toast.error('Error', { position: 'bottom-right' }) }}>Error</button>
                    <button onClick={() => { toast.info('Information', { position: 'bottom-right' }) }}>Info</button>
                    <button onClick={() => { toast.success('Success', { position: 'bottom-right' }) }}>Success</button>
                    <button onClick={() => { toast.warn('Warning', { position: 'bottom-right' }) }}>Warn</button>
                </div>
            </section>
        </div>
    )
}

export default MyToastComponent
