import './Page.css'

function Page({ title, subtitle, imageURL, children }) {
    return (
        <div className='page'>
            <div className='page-header' style={{ backgroundImage: `url(${imageURL})` }}>
                <h1>{ title }</h1>
                <h3>{ subtitle }</h3>
            </div>
            <div className='page-info'>
                { children }
            </div>
        </div>
    )
} 

export default Page