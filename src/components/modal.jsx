import "./css/modal.css"
export default function Modal({title,content,close}){
    return(
        <div className="modal">
            <div className="modal_container">
                   <div className="modal_close" onClick={()=>close(false)}>&times;</div>
                    <div className="modal_title">
                       { title}
                    </div>
                    <div className="modal_content">
                        {content}
                    </div>
                    <div className="modal_footer">
                        <button className='modal_btn' onClick={()=>close(false)}>close</button>
                    </div>
            </div>
        </div>
    )
}