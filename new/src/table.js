import React from 'react';


export default function Table(props) {
    return (
        <div className="firstone">
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
                                                    <th data-name="firstName">Name</th>
                                                    <th data-name="lastName">Size</th>
                                                    <th data-name="jobTitle" data-breakpoints="xs">Colour</th>
                                                    <th data-name="lastName">Weight</th>
                                                </tr>
                                            </thead>

                                            
                                                    <tr>
                                                        <td data-title="ID" data-breakpoints="xs">{props.id}</td>
                                                        <td>{props.name}</td>
                                                        <td data-title="Job Title" data-breakpoints="xs">{props.role}</td>
                                                        <td data-title="Started On" data-breakpoints="xs sm">{new Date(props.start).toDateString().substr(-11)}</td>
                                                        <td data-title="Date of Birth" data-breakpoints="xs sm md">{new Date(props.dob).toDateString().substr(-11)}</td>
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