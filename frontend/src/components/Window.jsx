import React from 'react'

const Window = ({WindowContent}) => {

    const Placeholder = () => (
      <div className="p-6 text-center text-accent opacity-50">Page not implemented yet</div>
    )

    const Content = WindowContent ?? Placeholder
        
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.3)] flex items-center justify-center">
            <div className="w-[650px] h-5/6 bg-white rounded-lg">
                <Content/>
            </div>
        </div>
    )
}

export default Window