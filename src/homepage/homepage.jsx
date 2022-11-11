import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import Navbarlogin from '../navbar/Navbarlogin';


export default function Homepage() {
    return (
        <>
            <Navbarlogin />

            <MDBRow>
                <MDBCol sm='6'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>Special title treatment</MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBBtn href='#'>Go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='6'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>Special title treatment</MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBBtn href='#'>Go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <div className='row'>

                <MDBCard>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </>

    );
}