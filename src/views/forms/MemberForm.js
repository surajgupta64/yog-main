import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormSelect,
    CFormSwitch,
    CFormTextarea,
    CImage,
    CListGroup,
    CListGroupItem,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTabPane,
} from "@coreui/react";
import React, { useState } from "react";
import { CountryList } from "src/components/CountryList";
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'

const MemberForm = () => {
    const [activeKey, setActiveKey] = useState(1)
    const [Fullname, setFullname] = useState('')
    const [CountryCode, setCountryCode] = useState('')
    const [ContactNumber, setContactNumber] = useState('')
    const [WhatsappNumber, setWhatsappNumber] = useState('')
    const [Email, setEmail] = useState('')
    const [Gender, setGender] = useState('')
    const [DateofBirth, setDateofBirth] = useState('')
    const [Address, setAddress] = useState('')
    const [Area, setArea] = useState('')
    const [city, setCity] = useState('')


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
                                <CForm>
                                    <CRow>
                                        <CCol lg={6} sm={12}>
                                            <CCardTitle>Personal Details</CCardTitle>
                                            <CRow>
                                                <CCol xs={4} className='mt-2 mb-1' >
                                                    <CImage className="mb-1" style={{ borderRadius: "50px" }} width={'200px'} src={ProfileIcon} />
                                                </CCol>
                                                <CCol xs={8} className='mt-5'>
                                                    <CRow>
                                                        <CFormInput
                                                            className="mb-1 ms-2 mr-3"
                                                            type="file"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Enter Name"
                                                        /></CRow>

                                                </CCol>
                                                <CCol xs={6}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="Full name"
                                                        value={Fullname}
                                                        onChange={(e) => setFullname(e.target.value)}
                                                        placeholder="Enter Name"
                                                    />
                                                </CCol>
                                                <CCol>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="email"
                                                        id="exampleFormControlInput1"
                                                        label="Email address"
                                                        value={Email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="name@example.com"
                                                        text="Must be 8-20 characters long."
                                                        aria-describedby="exampleFormControlInputHelpInline"
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CRow>
                                                <CCol>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Currency"
                                                        label="Country Code"
                                                        value={CountryCode}
                                                        onChange={(e) => setCountryCode(e.target.value)}
                                                    >{CountryList.map((item, index) => (
                                                        <option key={index} value={item.dial_code}>{item.name} {item.dial_code}</option>
                                                    ))}
                                                    </CFormSelect>
                                                </CCol>
                                                <CCol>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="number"
                                                        id="exampleFormControlInput1"
                                                        label="Contact Number"
                                                        value={ContactNumber}
                                                        onChange={(e) => setContactNumber(e.target.value)}
                                                        placeholder="Enter Number"
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CRow>
                                                <CCol>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="number"
                                                        id="exampleFormControlInput1"
                                                        value={WhatsappNumber}
                                                        onChange={(e) => setWhatsappNumber(e.target.value)}
                                                        label="Whatsapp Number"
                                                        placeholder="Enter Number"
                                                    />
                                                </CCol>
                                                <CCol>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="date"
                                                        id="exampleFormControlInput1"
                                                        value={DateofBirth}
                                                        onChange={(e) => setDateofBirth(e.target.value)}
                                                        label="Date of Birth"
                                                        placeholder="Enter Date"
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CRow>
                                                <CCol>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Currency"
                                                        value={Gender}
                                                        onChange={(e) => setGender(e.target.value)}
                                                        label="Gander"
                                                        options={[
                                                            "Select Gender",
                                                            { label: "Male", value: "1" },
                                                            { label: "Female", value: "2" },
                                                            { label: "Other", value: "2" },
                                                        ]}
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CCol>

                                                <CFormTextarea
                                                    id="exampleFormControlTextarea1"
                                                    label="Address"
                                                    value={Address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    rows="2"
                                                    text="Must be 8-20 words long."
                                                ></CFormTextarea>
                                            </CCol>
                                            <CRow>
                                                <CCol>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        value={Area}
                                                        onChange={(e) => setGender(e.target.value)}
                                                        label="Area"
                                                        placeholder="Enter Locality"
                                                    />
                                                </CCol>
                                                <CCol>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="City"
                                                        placeholder="Enter City"
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CRow>
                                                <CCol>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="number"
                                                        id="exampleFormControlInput1"
                                                        label="Pin Code"
                                                        placeholder="Enter Pin Code"
                                                    />
                                                </CCol>
                                                <CCol>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="State"
                                                        placeholder="Enter State"
                                                    />
                                                </CCol>
                                            </CRow>

                                            <CRow>
                                                <CCol>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="url"
                                                        id="exampleFormControlInput1"
                                                        label="Facebook Id"
                                                        placeholder="Enter Facebook id"
                                                    />
                                                </CCol>
                                                <CCol>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Blood Group"
                                                        label="Blood Group"
                                                        options={[
                                                            "Select Blood Group",
                                                            { label: "A", value: "1" },
                                                            { label: "B", value: "2" },
                                                        ]}
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CCardTitle>Communication Preference Settings</CCardTitle>
                                            <CRow>
                                                <CCol xs={4}>
                                                    <CFormSwitch size="xl" label="SMS" defaultChecked />
                                                </CCol>
                                                <CCol xs={4}>
                                                    <CFormSwitch size="xl" label="Mail" defaultChecked />
                                                </CCol>
                                                <CCol xs={4}>
                                                    <CFormSwitch size="xl" label="Push Notification" defaultChecked />
                                                </CCol>
                                            </CRow>
                                        </CCol>

                                        <CCol lg={6} sm={12}>
                                            <CRow>
                                                <CCardTitle>Emergency contact</CCardTitle>
                                                <CCol xs={6}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="Name"
                                                        placeholder="Enter Name"
                                                    />
                                                </CCol>
                                                <CCol>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="Relationship"
                                                        placeholder="Enter Relationship"
                                                    />
                                                </CCol>

                                                <CCol xs={6}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Working Days"
                                                        label="Country Code"
                                                        options={[
                                                            "Select Country Code",
                                                            { label: "+91", value: "1" },
                                                            { label: "Two", value: "2" },
                                                            { label: "Three", value: "3" },
                                                        ]}
                                                    />
                                                </CCol>
                                                <CCol xs={6}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="number"
                                                        id="exampleFormControlInput1"
                                                        label="Contact Number"
                                                        placeholder="Enter Number"
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CRow>
                                                <CCardTitle>Lead Information</CCardTitle>
                                                <CCol xs={6}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Service Name"
                                                        label="Service Name"
                                                        options={[
                                                            "Select Service Name",
                                                            { label: "Yoga", value: "1" },
                                                            { label: "PT", value: "2" },
                                                            { label: "TTC", value: "3" },
                                                        ]}
                                                    />
                                                </CCol>

                                                <CCol xs={6}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Customer type"
                                                        label="Customer type"
                                                        options={[
                                                            "Select Customer type",
                                                            { label: "Yoga", value: "1" },
                                                            { label: "PT", value: "2" },
                                                            { label: "TTC", value: "3" },
                                                        ]}
                                                    />
                                                </CCol>
                                                <CCol xs={6}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Enquiry Type"
                                                        label="Enquiry Type"
                                                        options={[
                                                            "Select Enquiry Type",
                                                            { label: "Yoga", value: "1" },
                                                            { label: "PT", value: "2" },
                                                            { label: "TTC", value: "3" },
                                                        ]}
                                                    />
                                                </CCol>
                                            </CRow>

                                            <CRow>
                                                <CCardTitle>Member Manager</CCardTitle>
                                                <CCol xs={6}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Assign Staff"
                                                        label="Assign Staff"
                                                        options={[
                                                            "Select Assign Staff",
                                                            { label: "Yoga", value: "1" },
                                                            { label: "PT", value: "2" },
                                                            { label: "TTC", value: "3" },
                                                        ]}
                                                    />
                                                </CCol>
                                                <CCol xs={6}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Member Manager"
                                                        label="Member Manager"
                                                        options={[
                                                            "Select Member Manager",
                                                            { label: "Yoga", value: "1" },
                                                            { label: "PT", value: "2" },
                                                            { label: "TTC", value: "3" },
                                                        ]}
                                                    />
                                                </CCol>
                                                <CCol xs={6}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Batch"
                                                        label="Batch"
                                                        options={[
                                                            "Select Batch",
                                                            { label: "Yoga", value: "1" },
                                                            { label: "PT", value: "2" },
                                                            { label: "TTC", value: "3" },
                                                        ]}
                                                    />
                                                </CCol>
                                                <CCol xs={6}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select General Trainer"
                                                        label="General Trainer"
                                                        options={[
                                                            "Select General Trainer",
                                                            { label: "Yoga", value: "1" },
                                                            { label: "PT", value: "2" },
                                                            { label: "TTC", value: "3" },
                                                        ]}
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CRow>
                                                <CCardTitle>IDs</CCardTitle>
                                                <CCol xs={6}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="Attendance ID"
                                                        placeholder="Enter Attendance ID"
                                                    />
                                                </CCol>
                                                <CCol xs={6}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="Center ID"
                                                        placeholder="Enter Club ID"
                                                    />
                                                </CCol>
                                                <CCol xs={6}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="Locker Key No"
                                                        placeholder="Enter Locker Key No"
                                                    />
                                                </CCol>
                                                <CCol xs={6}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="PAN"
                                                        placeholder="Enter PAN"
                                                    />
                                                </CCol>
                                            </CRow>

                                        </CCol>
                                    </CRow>
                                    <CRow className="mt-2">
                                        <CCardTitle className="mb-2">Injuries and conditions</CCardTitle>
                                        <CCol>
                                            <CListGroup>
                                                <CListGroupItem>
                                                    <CFormCheck label="Asthma/COPD" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="Back Pain" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="Bone Fracture" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="Carpal Tunnel" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="Diabetes" />
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                        <CCol>
                                            <CListGroup>
                                                <CListGroupItem>
                                                    <CFormCheck label="Digestive Disorder" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="Shoulder Pain" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="Foot Pain" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="Knee Replacement" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="High Cholestrol" />
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>

                                        <CCol>
                                            <CListGroup>
                                                <CListGroupItem>
                                                    <CFormCheck label="Joint Pain" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="Pregnancy" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="Surgery" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="High Blood Pressure" />
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CFormCheck label="Other" />
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                    </CRow>
                                    <CButton className="mt-2" onClick={() => setActiveKey(2)}>Save</CButton>
                                </CForm>
                            </CTabPane>
                            <CTabPane role="tabpane2" aria-labelledby="second-tab" visible={activeKey === 2}>
                                <CForm>
                                    <CRow>
                                        <CCol xs={6}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Height"
                                                placeholder="Enter height"
                                            />
                                        </CCol>
                                        <CCol xs={6}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Weight"
                                                placeholder="Enter Weight"
                                            />
                                        </CCol>
                                        <CCardTitle>Fitness Goals</CCardTitle>

                                        <CCol xs={6}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Currency"
                                                label="Fitness Level"
                                                options={[
                                                    "Select Fitness Level",
                                                    { label: "New", value: "1" },
                                                    { label: "Beginner", value: "2" },
                                                    { label: "Intermediate", value: "3" },
                                                    { label: "Advance", value: "4" },
                                                ]}
                                            />
                                        </CCol>
                                        <CCol xs={3}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Currency"
                                                label="Fitness Goal"
                                                options={[
                                                    "Select Fitness Goal",
                                                    { label: "Weight loss", value: "1" },
                                                    { label: "inch loss", value: "2" },
                                                    { label: "fitness", value: "3" },
                                                    { label: "staminass", value: "1" },
                                                ]}
                                            />
                                        </CCol>
                                        <CCol xs={3}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Ideal Weight"
                                                placeholder="Enter Ideal Weight"
                                            />
                                        </CCol>
                                        <CCol>
                                            <CFormTextarea
                                                id="exampleFormControlTextarea1"
                                                label="Suggestion"
                                                rows="2"
                                                text="Must be 8-20 words long."
                                            ></CFormTextarea>
                                        </CCol>
                                        <CCol>

                                            <CFormTextarea
                                                id="exampleFormControlTextarea1"
                                                label="Comments"
                                                rows="2"
                                                text="Must be 8-20 words long."
                                            ></CFormTextarea>
                                        </CCol>
                                    </CRow>
                                    <CButton className='mt-2'>Save</CButton>
                                </CForm>
                            </CTabPane>
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCardBody>
        </CCard>
    );
};

export default MemberForm;