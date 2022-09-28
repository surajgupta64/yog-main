import { cilImage } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CForm, CRow } from '@coreui/react'
import React from 'react'
import { FaImage, FaPowerOff } from 'react-icons/fa'

const CenterSetup = () => {
    return (
        <CCard>
            <CCardHeader>
                <h4>Center Setup Master</h4>
                <span>Complete the following steps for center setup</span>
            </CCardHeader>
            <CCardBody style={{ padding: '25px' }}>
                {[
                    { color: 'primary', icon: <FaImage style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Company Logo Setup', subtitle: 'Brand logo' },
                    { color: 'secondary', icon: <FaImage style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Company Profile Setup', subtitle: 'Set Up Branch Profile' },
                    { color: 'success', icon: <FaImage style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Services Master', subtitle: 'Set Up Branch Profile' },
                    { color: 'danger', icon: <FaImage style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Price Master', subtitle: 'Set Up Branch Profile' },
                    { color: 'warning', icon: <FaImage style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Batch time Master', subtitle: 'Brand logo' },
                    { color: 'info', icon: <FaImage style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Form Master', subtitle: 'Brand logo' },
                    { color: 'dark', icon: <FaImage style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Invoice Master', subtitle: 'Brand logo' },
                ].map((item, index) => (
                    <CCard
                        color={item.color}
                        textColor='white'
                        className="mb-3"
                        key={index}
                    >
                        <CCardBody >
                            <CRow>
                                <CCol xs={1}>{item.icon}</CCol>
                                <CCol>
                                    <CCardTitle>{item.title}</CCardTitle>
                                    <CCardText>{item.subtitle}</CCardText>
                                </CCol>
                                <CCol xs={2}><CButton className='mt-2' style={{ backgroundColor: 'white', color: 'black' }}><FaPowerOff size='15px' /> Start</CButton></CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                ))}
            </CCardBody>
        </CCard>
    )
}

export default CenterSetup