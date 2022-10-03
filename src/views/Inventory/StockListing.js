import { cilInfo } from "@coreui/icons";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormInput,
    CFormSelect,
    CFormTextarea,
    CInputGroup,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTabPane,
} from "@coreui/react";
import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";

import DataTable from "src/components/DataTable";

const StockListing = () => {
    const [action, setAction] = useState(false)
    const [activeKey, setActiveKey] = useState(1)


    const header = [

        /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */

        { heading: 'Sr. No', value: 'id' },
        { heading: 'Product Code', value: 'service_name' },
        { heading: 'Product Name', value: 'date_time' },
        { heading: 'Brand Name', value: 'member_name' },
        { heading: 'Category', value: 'mobile' },
        { heading: 'Colour', value: 'service_name' },
        { heading: 'Price', value: 'variation_name' },
        { heading: 'Total Stock', value: 'expiry_date' },
        { heading: 'Sold ', value: 'expiry_date' },
        { heading: 'Avl Stock', value: 'expiry_date' },
        { heading: 'Info', iconBtn: cilInfo },
        { heading: 'Renew', btn: 'renew' },
        { heading: 'Action', com: (<> <FaBeer size='20px' /></>) },
    ]


    const Users = [
        {
            id: 1,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
        {
            id: 2,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
    ];

    return (
        <>

            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-3 border-success">
                        <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                            <CNav variant="pills" role="tablist">
                                <CNavItem>
                                    <CNavLink
                                        style={{ color: "white" }}
                                        href="javascript:void(0);"
                                        active={activeKey === 1}
                                        onClick={() => setActiveKey(1)}
                                    >
                                        Clothes Product
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink
                                        style={{ color: "white" }}
                                        href="javascript:void(0);"
                                        active={activeKey === 2}
                                        onClick={() => setActiveKey(2)}
                                    >

                                        Ayurveda Medicine
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink
                                        style={{ color: "white" }}
                                        href="javascript:void(0);"
                                        active={activeKey === 3}
                                        onClick={() => setActiveKey(3)}
                                    >
                                        Fitness Product
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink
                                        style={{ color: "white" }}
                                        href="javascript:void(0);"
                                        active={activeKey === 4}
                                        onClick={() => setActiveKey(4)}
                                    >
                                        Foods Product
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </CCardHeader>
                        <CCardBody>
                            <CTabContent>
                                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                                    <CRow className='d-flex mb-2'>
                                        <CCol lg={6} sm={6} className='mb-2'>
                                            <CInputGroup style={{ height: "38px" }}>
                                                <CFormSelect
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon"
                                                >
                                                    <option>Name</option>
                                                    <option value="1">Mobile</option>
                                                    <option value="2">Email</option>
                                                    <option value="3">Company Name</option>
                                                </CFormSelect>
                                                <CFormInput
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CButton type="button" color="primary">
                                                    Search
                                                </CButton>
                                            </CInputGroup>
                                        </CCol>
                                        <CCol lg={6} sm={6} className='mb-2'>
                                            <CButton className="float-end" onClick={() => setAction(!action)}>{action ? 'Close' : 'Add New Clothes'}</CButton>
                                        </CCol>
                                        {action &&
                                            <CCard className="mt-2 mb-2" >
                                                <CCardBody>
                                                    <CForm>
                                                        <CRow>
                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="name"
                                                                    id="exampleFormControlInput1"
                                                                    label="Product Name"
                                                                    placeholder="Enter Name"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="name"
                                                                    id="exampleFormControlInput1"
                                                                    label="Brand Name"
                                                                    placeholder="Enter Brand Name"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6}>
                                                                <CFormSelect
                                                                    className="mb-1"
                                                                    aria-label="Select Category"
                                                                    label="Stock Category"
                                                                    options={[
                                                                        "Select Category",
                                                                        { label: "Small Size", value: "1" },
                                                                        { label: "L Size", value: "2" },
                                                                    ]}
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="text"
                                                                    id="exampleFormControlInput1"
                                                                    label="Colour"
                                                                    placeholder="Enter Colour"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    id="exampleFormControlInput1"
                                                                    label="Price"
                                                                    placeholder="Enter Price"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    id="exampleFormControlInput1"
                                                                    label="Total Stock"
                                                                    placeholder="Enter Total Stock"
                                                                />
                                                            </CCol>



                                                            <CCol className="mt-4">
                                                                <CButton className="float-end">Save</CButton>
                                                            </CCol>
                                                        </CRow>
                                                    </CForm>
                                                </CCardBody>
                                            </CCard>
                                        }
                                    </CRow>

                                    <DataTable className='mt-2' heading={header} data={Users} />
                                </CTabPane>
                                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 2}>
                                    <CRow className='d-flex mb-2'>
                                        <CCol lg={6} sm={6} className='mb-2'>
                                            <CInputGroup style={{ height: "38px" }}>
                                                <CFormSelect
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon"
                                                >
                                                    <option>Name</option>
                                                    <option value="1">Mobile</option>
                                                    <option value="2">Email</option>
                                                    <option value="3">Company Name</option>
                                                </CFormSelect>
                                                <CFormInput
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CButton type="button" color="primary">
                                                    Search
                                                </CButton>
                                            </CInputGroup>
                                        </CCol>
                                        <CCol lg={6} sm={6} className='mb-2'>
                                            <CButton className="float-end" onClick={() => setAction(!action)}>{action ? 'Close' : 'Add New Ayurveda Medicine'}</CButton>
                                        </CCol>
                                        {action &&
                                            <CCard className="mt-2 mb-2" >
                                                <CCardBody>
                                                    <CForm>
                                                        <CRow>
                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="name"
                                                                    id="exampleFormControlInput1"
                                                                    label="Product Name"
                                                                    placeholder="Enter Name"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="name"
                                                                    id="exampleFormControlInput1"
                                                                    label="Brand Name"
                                                                    placeholder="Enter Brand Name"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6}>
                                                                <CFormSelect
                                                                    className="mb-1"
                                                                    aria-label="Select Category"
                                                                    label="Stock Category"
                                                                    options={[
                                                                        "Select Category",
                                                                        { label: "Power", value: "1" },
                                                                        { label: "Liquied", value: "2" },
                                                                    ]}
                                                                />
                                                            </CCol>


                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    id="exampleFormControlInput1"
                                                                    label="QTY"
                                                                    placeholder="Enter Qty"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    id="exampleFormControlInput1"
                                                                    label="Price"
                                                                    placeholder="Enter Price"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    id="exampleFormControlInput1"
                                                                    label="Total Stock"
                                                                    placeholder="Enter Total Stock"
                                                                />
                                                            </CCol>

                                                            <CCol className="mt-4">
                                                                <CButton className="float-end">Save</CButton>
                                                            </CCol>
                                                        </CRow>
                                                    </CForm>
                                                </CCardBody>
                                            </CCard>
                                        }
                                    </CRow>
                                    <DataTable className='mt-2' heading={header} data={Users} />
                                </CTabPane>
                                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 3}>
                                    <CRow className='d-flex mb-2'>
                                        <CCol lg={6} sm={6} className='mb-2'>
                                            <CInputGroup style={{ height: "38px" }}>
                                                <CFormSelect
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon"
                                                >
                                                    <option>Name</option>
                                                    <option value="1">Mobile</option>
                                                    <option value="2">Email</option>
                                                    <option value="3">Company Name</option>
                                                </CFormSelect>
                                                <CFormInput
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CButton type="button" color="primary">
                                                    Search
                                                </CButton>
                                            </CInputGroup>
                                        </CCol>
                                        <CCol lg={6} sm={6} className='mb-2'>
                                            <CButton className="float-end" onClick={() => setAction(!action)}>{action ? 'Close' : 'Add New Fitness Product'}</CButton>
                                        </CCol>
                                        {action &&
                                            <CCard className="mt-2 mb-2" >
                                                <CCardBody>
                                                    <CForm>
                                                        <CRow>
                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="name"
                                                                    id="exampleFormControlInput1"
                                                                    label="Product Name"
                                                                    placeholder="Enter Name"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="name"
                                                                    id="exampleFormControlInput1"
                                                                    label="Brand Name"
                                                                    placeholder="Enter Brand Name"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6}>
                                                                <CFormSelect
                                                                    className="mb-1"
                                                                    aria-label="Select Category"
                                                                    label="Stock Category"
                                                                    options={[
                                                                        "Select Category",
                                                                        { label: "Small Size", value: "1" },
                                                                        { label: "L Size", value: "2" },
                                                                    ]}
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="text"
                                                                    id="exampleFormControlInput1"
                                                                    label="Colour"
                                                                    placeholder="Enter Colour"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    id="exampleFormControlInput1"
                                                                    label="Price"
                                                                    placeholder="Enter Price"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    id="exampleFormControlInput1"
                                                                    label="Total Stock"
                                                                    placeholder="Enter Total Stock"
                                                                />
                                                            </CCol>



                                                            <CCol className="mt-4">
                                                                <CButton className="float-end">Save</CButton>
                                                            </CCol>
                                                        </CRow>
                                                    </CForm>
                                                </CCardBody>
                                            </CCard>
                                        }
                                    </CRow>
                                    <DataTable className='mt-2' heading={header} data={Users} />
                                </CTabPane>

                                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 4}>
                                    <CRow className='d-flex mb-2'>
                                        <CCol lg={6} sm={6} className='mb-2'>
                                            <CInputGroup style={{ height: "38px" }}>
                                                <CFormSelect
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon"
                                                >
                                                    <option>Name</option>
                                                    <option value="1">Mobile</option>
                                                    <option value="2">Email</option>
                                                    <option value="3">Company Name</option>
                                                </CFormSelect>
                                                <CFormInput
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CButton type="button" color="primary">
                                                    Search
                                                </CButton>
                                            </CInputGroup>
                                        </CCol>
                                        <CCol lg={6} sm={6} className='mb-2'>
                                            <CButton className="float-end" onClick={() => setAction(!action)}>{action ? 'Close' : 'Add New Food Product'}</CButton>
                                        </CCol>
                                        {action &&
                                            <CCard className="mt-2 mb-2" >
                                                <CCardBody>
                                                    <CForm>
                                                        <CRow>
                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="name"
                                                                    id="exampleFormControlInput1"
                                                                    label="Product Name"
                                                                    placeholder="Enter Name"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="name"
                                                                    id="exampleFormControlInput1"
                                                                    label="Brand Name"
                                                                    placeholder="Enter Brand Name"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6}>
                                                                <CFormSelect
                                                                    className="mb-1"
                                                                    aria-label="Select Category"
                                                                    label="Food Category"
                                                                    options={[
                                                                        "Select Food Category",
                                                                        { label: "Small Size", value: "1" },
                                                                        { label: "L Size", value: "2" },
                                                                    ]}
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    id="exampleFormControlInput1"
                                                                    label="Price"
                                                                    placeholder="Enter Price"
                                                                />
                                                            </CCol>

                                                            <CCol lg={3} sm={6} >
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    id="exampleFormControlInput1"
                                                                    label="Total Stock"
                                                                    placeholder="Enter Total Stock"
                                                                />
                                                            </CCol>
                                                            <CCol className="mt-4">
                                                                <CButton className="float-end">Save</CButton>
                                                            </CCol>
                                                        </CRow>
                                                    </CForm>
                                                </CCardBody>
                                            </CCard>
                                        }
                                    </CRow>
                                    <DataTable className='mt-2' heading={header} data={Users} />
                                </CTabPane>
                            </CTabContent>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
};

export default StockListing;