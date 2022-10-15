import React, {useState,useEffects}from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let listColor = ["red", "orange", "green"]
//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState(listColor[0]);
		return (
		<div className="semaforo">
			{listColor.map((actualColor)=>{
				return (
					<div className={"luz"+((color==actualColor)?" on":"")} 
						onClick={()=>setColor(actualColor)}
						style={{"background-color":actualColor}}/>
				);
			})}
			<button onClick={()=>{
				const index=listColor.indexOf(color)
				const next=(index===listColor.length-1)?0:index+1
				setColor(listColor[next])
			}}>change</button>
			<button onClick={()=>{
				if(!listColor.includes("purple")){
					listColor.push("purple")
					setColor("purple")
				}
			}}
			disabled={listColor.includes("purple")}>add</button>
			<button onClick={()=>{
				listColor = ["red", "orange", "green"]
				setColor("red")
			}}>reset</button>
		</div>
	);
};

export default TrafficLight;
