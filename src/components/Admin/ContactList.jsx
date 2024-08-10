import React from "react";
import { DashboardContent } from "./DashboardContent";

export const ContactList = () => {
    return (
        <DashboardContent title="Contact List">
            <div className="d-flex flex-column">
                <div className="table-responsive">
                    <table className="table table-sm table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-weight-bold">1</td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@johndoe@yahoo.com</td>
                                <td>12345678901</td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold">2</td>
                                <td>Rita</td>
                                <td>Foster</td>
                                <td>rfoster@rocketmail.net</td>
                                <td>3425674949</td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold">3</td>
                                <td>Larry</td>
                                <td>Gaga</td>
                                <td>thegaga@gmail.com</td>
                                <td>12345678901</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardContent>
    );
};
