import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormSwitch,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTabPane,
} from "@coreui/react";
import React, { useState } from "react";
import FitnessProfile from "../clients/MemberDetails/FitnessProfile";
import PersonalDetails from "../clients/MemberDetails/PersonalDetails";

const MemberForm = () => {
    const [activeKey, setActiveKey] = useState(1)
    return (
        <CCard>
            <CCardHeader>Member Form</CCardHeader>
            <CCardBody>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CNav variant="pills" role="tablist" className='d-flex'>
                            {[
                                { id: '1', heading: 'Personal Information' },
                                { id: '2', heading: 'Fitness Profile' },
                            ].map((item, index) => (
                                <CNavItem key={index}>
                                    <CNavLink
                                        style={{ color: 'white' }}
                                        href="javascript:void(0);"
                                        active={activeKey === item.id}
                                        onClick={() => setActiveKey(item.id)}
                                    >
                                        {item.heading}
                                    </CNavLink>
                                </CNavItem>
                            ))}
                        </CNav>
                    </CCardHeader>
                    <CCardBody>
                        <CTabContent>
                            {[
                                { id: '1', heading: 'Personal Information', com: <PersonalDetails /> },
                                { id: '2', heading: 'Fitness Profile', com: <FitnessProfile /> },
                            ].map((item, index) => (
                                <CTabPane key={index} role="tabpanel" aria-labelledby="home-tab" visible={activeKey === item.id}>
                                    {item.com}
                                </CTabPane>
                            ))}
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCardBody>
        </CCard>
    );
};

export default MemberForm;