import "./css/rmodal.css"
export default function Rmodal({title,content,close}){
    return(
        <div className="rmodal">
            <div className="rmodal_container">
                   <div className="rmodal_close" onClick={()=>close(false)}>&times;</div>
                    <div className="rmodal_title">
                       { title}
                    </div>
                    <div className="rmodal_content">
                        {content}
                    </div>
                    <div className="rmodal_footer">
                        <button className='rmodal_btn' onClick={()=>close(false)}>close</button>
                    </div>
            </div>
        </div>
    )
}