import {
    CCard,
    CCardBody,
    CCardHeader,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
} from "@coreui/react";
import React, { useState } from "react";
import FitnessProfile from "../clients/MemberDetails/FitnessProfile";
import PersonalDetails from "../clients/MemberDetails/PersonalDetails";

const MemberForm = () => {
    const [activeKey, setActiveKey] = useState(1)

    const data = [
        { id: '1', heading: 'Personal Information', com: <PersonalDetails /> },
        { id: '2', heading: 'Fitness Profile', com: <FitnessProfile /> },
    ]
    return (
        <CCard>
            <CCardHeader>Member Form</CCardHeader>
            <CCardBody>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CNav variant="pills" role="tablist" className='d-flex'>
                            <CNavItem >
                                <CNavLink
                                    style={{ color: 'white' }}
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                >
                                    Personal Information
                                </CNavLink>
                            </CNavItem>
                            <CNavItem >
                                <CNavLink
                                    style={{ color: 'white' }}
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                >
                                    Fitness Profile
                                </CNavLink>
                            </CNavItem>
                        </CNav>
                    </CCardHeader>
                    <CCardBody>
                        <CTabContent>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                                <PersonalDetails />
                            </CTabPane>
                            <CTabPane role="tabpane2" aria-labelledby="second-tab" visible={activeKey === 2}>
                                <FitnessProfile />
                            </CTabPane>
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCardBody>
        </CCard>
    );
};

export default MemberForm;