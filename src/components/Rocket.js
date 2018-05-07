import React from "react"
import "../styles/Rocket.sass"

export default class Rocket extends React.Component {
                   // eslint-disable-line react/prefer-stateless-function

                   render() {
                       return <div className={"rocket-block"}>
                               <h3> Rocket </h3>
       
           
                               <div className={"rocket__column"}>
                                    <div className={"rocket__row"}>
                                        <div className={"subcolumn--left"}>
                                            Name:

                                        </div>
                                    
                                        <div className={"subcolumn--right"}>
                                            {this.props.rocket.name}
                                        </div>
                                    </div>
                                    <div className={"rocket__row"}>
                                        <div className={"subcolumn--left"}>
                                            Company:
                                        </div>
                                    
                                        <div className={"subcolumn--right"}>
                                            {this.props.rocket.company}
                                        </div>
                                    </div>
                                    <div className={"rocket__row"}>
                                        <div className={"subcolumn--left"}>
                                            Height:
                                        </div>
                                    
                                        <div className={"subcolumn--right"}>
                                            {this.props.rocket.height.meters}M / {this.props.rocket.height.feet}FT
                                        </div>
                                    </div>
                                     <div className={"rocket__row"}>
                                        <div className={"subcolumn--left"}>
                                            Diameter:
                                        </div>
                                    
                                        <div className={"subcolumn--right"}>
                                            {this.props.rocket.diameter.meters}M / {this.props.rocket.diameter.feet}FT
                                        </div>
                                    </div>
                                     <div className={"rocket__row"}>
                                        <div className={"subcolumn--left"}>
                                            Mass:
                                        </div>
                                    
                                        <div className={"subcolumn--right"}>
                                            {this.props.rocket.mass.kg}KG / {this.props.rocket.mass.lb}Lb
                                        </div>
                                    </div>
                               </div>
                               <div className={"rocket__column"}>
                               <div className={"rocket__row"}>
                                   <div className={"subcolumn--left" } >
                                       First flight:
                                   </div>
                                   <div className={"subcolumn--right"}>
                                       {this.props.rocket["first_flight"]}
                                   </div>
                                    </div>
                               </div>
                               <p className={ "rocket__additional-info rocket-block__par" } >
                                   { this.props.rocket.description }
                               </p>
                           </div>
                   }
               }
