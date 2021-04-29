import React from 'react';


export default function birdSight(props) {
    return (
        <div className="secondtable">
        <div className="page-wrapper" >
            <div class="container-fluid">
                


                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default card-view">
                            <div className="panel-wrapper in">
                                <div className="panel-body">
                                    <div className="table-wrap">
                                        <table id="footable_1" className="table" data-sorting="true">
                                            <thead>
                                                <tr>
                                                    <th data-name="id" data-breakpoints="xs" data-type="number">#</th>
                                                 <th data-name="firstName">Species</th>
                                                    <th data-name="lastName">Location</th>
                                                    <th data-name="jobTitle" data-breakpoints="xs">Date-Time</th>
                            
                                                </tr>
                                            </thead>

                                            
                                                    <tr>
                                                        <td data-title="ID" data-breakpoints="xs">{props.id}</td>
                                                        <td>{props.name}</td>
                                                        <td data-title="Job Title" data-breakpoints="xs">{props.lastName}</td>
                                                        <td data-title="Started On" data-breakpoints="xs sm">{new Date(props.role).toDateString().substr(-11)}</td>
                                                    </tr>
                                                
                                            
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    )      
        
    
}