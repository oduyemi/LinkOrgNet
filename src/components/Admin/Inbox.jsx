import React from "react";
import { DashboardContent } from "./DashboardContent";

export const Inbox = () => {
    return (
        <DashboardContent title="Messages">
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
                                <th scope="col">Topic</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-weight-bold">1</td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@johndoe@yahoo.com</td>
                                <td>12345678901</td>
                                <td>Enquiries</td>
                                <td>I'd like to know more about your products and services.</td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold">2</td>
                                <td>Rita</td>
                                <td>Foster</td>
                                <td>rfoster@rocketmail.net</td>
                                <td>3425674949</td>
                                <td>Partnership</td>
                                <td>Are there partnership opportunities in your company?</td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold">3</td>
                                <td>Larry</td>
                                <td>Gaga</td>
                                <td>thegaga@gmail.com</td>
                                <td>12345678901</td>
                                <td>Enquiries</td>
                                <td>I'd like to know more about your products and services.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardContent>
    );
};
