import {useStsate} from "react";
export default function MultiCheckBox(){
    const programs = ["c","Java","Python","JavaScript"];
    const [prgs, setPrgs] = useStsate([]);
    const handleChange = (e) =>{
        if(e.target.checked) setPrgs([...prgs]);               
        else setPrgs  (prgs.filter(p => p !== e.target.valua))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                  
    }
return(
    <div>
    <h2> Programs that you can choose </h2>
    {
        programs.map((p) => (
            <span key={p}>
                <input type="checkbox" value={p} onChange={handleChange}/>
                <label>{p}</label>
                </span>

        )
        )
    }
    <hr/>
    <h3> You choose : {prgs.map((p,i)=>{return <span key={i}>{p}</span>})}</h3>
    </div>
);
}