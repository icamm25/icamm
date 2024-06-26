
import './css/domains.css'

export default function Domains(){
    return(
        <div className='white-bgs' id='#domain'>
            <div className='domain-container'>
                <div className='head-domain'>Domains</div>


                <div className='domain-content1'>
                    <div className='domain-bt'>
                        <div className='box-domain'>
                            <img src="/crypto.png" alt="" height={80} width={80}/>
                        </div>
                        <p>Cryptography and <br/> Network  Security</p>
                    </div>
                    <div className='domain-bt'>
                        <div className='box-domain'>
                        <img src="/graph.png" alt="" height={80} width={80}/>
                        </div>
                        <p>Graph Theory and <br /> Combinatorics</p>
                    </div>
                    <div className='domain-bt'>
                        <div className='box-domain'>
                        <img src="/calc.png" alt="" height={90} width={90}/>
                        </div>
                        <p>Control Theory and <br /> Fractional Calculus</p>
                    </div>
                    
                </div>
                <div className='domain-content2'>
                    <div className='domain-bt'>
                        <div className='box-domain'>
                        <img src="/opt.png" alt="" height={80} width={80}/>
                        </div>
                        <p>Optimization Techniques<br/> and Stochastic Models</p>
                    </div>
                    <div className='domain-bt'>
                        <div className='box-domain'>
                        <img src="/model.png" alt="" height={100} width={100}/>
                        </div>
                        <p>Mathematical<br/> Modeling</p>
                    </div>

                    <div className='domain-bt'>
                        <div className='box-domain'>
                        <img src="/comp.png" alt="" height={80} width={80}/>
                        </div>
                        <p>Soft Computing <br/> and Computational <br/> Mathematics</p>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    )
}