import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormSelect, CImage, CListGroup, CListGroupItem, CRow, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import Profile from 'src/assets/images/avatars/img_avatar.png'

const LiveClass = () => {
    const [liveClass, setLiveClass] = useState(false)

    return (
        <CCard>
            <CCardHeader>
                <CCardTitle>Live Classes</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol xs={9}>
                            {liveClass && (
                                <CCard>
                                    <CCardBody>
                                        <CRow>
                                            <CCol>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Trainer"
                                                    label="Trainer"
                                                    options={[
                                                        "Select Trainer",
                                                        { label: "sejal", value: "1" },
                                                        { label: "prabha", value: "2" },
                                                        { label: "Three", value: "3" },
                                                    ]}
                                                />
                                            </CCol>
                                            <CCol>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Service"
                                                    label="Service"
                                                    options={[
                                                        "Select Service",
                                                        { label: "One", value: "1" },
                                                        { label: "Two", value: "2" },
                                                        { label: "Three", value: "3" },
                                                    ]}
                                                />
                                            </CCol>
                                            <CCol>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Batch"
                                                    label="Batch"
                                                    options={[
                                                        "Select Batch",
                                                        { label: "One", value: "1" },
                                                        { label: "Two", value: "2" },
                                                        { label: "Three", value: "3" },
                                                    ]}
                                                />
                                            </CCol>
                                            <CCol className='mt-4'>
                                                <CButton onClick={() => setLiveClass(false)}>
                                                    Save
                                                </CButton>
                                                <CButton className='ms-2' onClick={() => setLiveClass(false)}>
                                                    Cancel
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CCardBody>
                                </CCard>
                            )}
                        </CCol>
                        <CCol xs={3}>
                            <CButton className="mt-2 float-end me-3 " onClick={() => setLiveClass(!liveClass)} >Add Live Classes</CButton>
                        </CCol>
                    </CRow>
                </CForm>



                <CCard className='mt-3'>
                    <CCardHeader>
                        Current Live Classes Update
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol lg={6} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <CCol xs={5} className='mt-2'>
                                                    <CImage src={Profile} style={{ borderRadius: '50%', width: '100%' }} />
                                                </CCol>
                                                <CCol>
                                                    <CRow className='mt-3'>
                                                        <label style={{ fontWeight: 'bold' }}>Trainer Name</label>
                                                        <span style={{ fontWeight: 'bold' }}>Service</span>
                                                        <span>Batch Timing: 1 hr</span>
                                                        <span>Duration: 30 min</span>
                                                        <span>Registered User : 45</span>
                                                        <span>Attending User: 35</span>
                                                        <CCol>
                                                            <CButton className='mt-1' shape="rounded-pill" style={{ backgroundColor: 'red', border: 'none', color: 'white' }} disabled>
                                                                <CSpinner component="span" size="sm" variant="grow" style={{ backgroundColor: 'white', marginRight: '5px' }} aria-hidden="true" />
                                                                Live
                                                            </CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                            <CCol lg={6} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader >
                                            <CRow>
                                                <CCol xs={5} className='mt-2'>
                                                    <CImage src={Profile} style={{ borderRadius: '50%', width: '100%' }} />
                                                </CCol>
                                                <CCol>
                                                    <CRow className='mt-3'>
                                                        <label style={{ fontWeight: 'bold' }}>Trainer Name</label>
                                                        <span style={{ fontWeight: 'bold' }}>Service</span>
                                                        <span>Batch Timing: 1 hr</span>
                                                        <span>Duration: 30 min</span>
                                                        <span>Registered User : 45</span>
                                                        <span>Attending User: 35</span>
                                                        <CCol>
                                                            <CButton className='mt-1' shape="rounded-pill" style={{ backgroundColor: 'red', border: 'none', color: 'white' }} disabled>
                                                                <CSpinner component="span" size="sm" variant="grow" style={{ backgroundColor: 'white', marginRight: '5px' }} aria-hidden="true" />
                                                                Live
                                                            </CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>1452</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>145</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>

                                                        <CCol>175</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                            <CCol lg={6} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <CCol xs={5} className='mt-2'>
                                                    <CImage src={Profile} style={{ borderRadius: '50%', width: '100%' }} />
                                                </CCol>
                                                <CCol>
                                                    <CRow className='mt-3'>
                                                        <label style={{ fontWeight: 'bold' }}>Trainer Name</label>
                                                        <span style={{ fontWeight: 'bold' }}>Service</span>
                                                        <span>Batch Timing: 1 hr</span>
                                                        <span>Duration: 30 min</span>
                                                        <span>Registered User : 45</span>
                                                        <span>Attending User: 35</span>
                                                        <CCol>
                                                            <CButton className='mt-1' shape="rounded-pill" style={{ backgroundColor: 'red', border: 'none', color: 'white' }} disabled>
                                                                <CSpinner component="span" size="sm" variant="grow" style={{ backgroundColor: 'white', marginRight: '5px' }} aria-hidden="true" />
                                                                Live
                                                            </CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                            <CCol lg={6} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <CCol xs={5} className='mt-2'>
                                                    <CImage src={Profile} style={{ borderRadius: '50%', width: '100%' }} />
                                                </CCol>
                                                <CCol>
                                                    <CRow className='mt-3'>
                                                        <label style={{ fontWeight: 'bold' }}>Trainer Name</label>
                                                        <span style={{ fontWeight: 'bold' }}>Service</span>
                                                        <span>Batch Timing: 1 hr</span>
                                                        <span>Duration: 30 min</span>
                                                        <span>Registered User : 45</span>
                                                        <span>Attending User: 35</span>
                                                        <CCol>
                                                            <CButton className='mt-1' shape="rounded-pill" style={{ backgroundColor: 'red', border: 'none', color: 'white' }} disabled>
                                                                <CSpinner component="span" size="sm" variant="grow" style={{ backgroundColor: 'white', marginRight: '5px' }} aria-hidden="true" />
                                                                Live
                                                            </CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                            <CCol lg={6} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <CCol xs={5} className='mt-2'>
                                                    <CImage src={Profile} style={{ borderRadius: '50%', width: '100%' }} />
                                                </CCol>
                                                <CCol>
                                                    <CRow className='mt-3'>
                                                        <label style={{ fontWeight: 'bold' }}>Trainer Name</label>
                                                        <span style={{ fontWeight: 'bold' }}>Service</span>
                                                        <span>Batch Timing: 1 hr</span>
                                                        <span>Duration: 30 min</span>
                                                        <span>Registered User : 45</span>
                                                        <span>Attending User: 35</span>
                                                        <CCol>
                                                            <CButton className='mt-1' shape="rounded-pill" style={{ backgroundColor: 'red', border: 'none', color: 'white' }} disabled>
                                                                <CSpinner component="span" size="sm" variant="grow" style={{ backgroundColor: 'white', marginRight: '5px' }} aria-hidden="true" />
                                                                Live
                                                            </CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>

                        </CRow>
                    </CCardBody>
                </CCard>

                <CCard className='mt-3'>
                    <CCardHeader>
                        All Live Classes
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol lg={6} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow >
                                                <CCol xs={5} className='mt-2'>
                                                    <CImage src={Profile} style={{ borderRadius: '50%', width: '100%' }} />
                                                </CCol>
                                                <CCol>
                                                    <CRow className='mt-4'>
                                                        <label style={{ fontWeight: 'bold' }}>Trainer Name</label>
                                                        <span style={{ fontWeight: 'bold' }}>Service</span>
                                                        <span>Batch Timing: 12 clock afternoon</span>
                                                        <span>Duration: 30 min</span>
                                                        <span>Registered User : 45</span>
                                                        <CCol>
                                                            <CButton className='mt-1' shape="rounded-pill" style={{ backgroundColor: 'green', border: 'none', color: 'white' }} disabled>
                                                                <CSpinner component="span" className='me-2' style={{ color: 'white' }} size="sm" aria-hidden="true" />
                                                                Schudeled
                                                            </CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>107</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>154</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCardBody>
        </CCard>
    )
}

export default LiveClass
