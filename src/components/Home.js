import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
           <Section 
            title="Model S"
            description="Order Online for Touchless Deliver"
            backgroungImg="img1.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
           />
           <Section 
            title="Model Y"
            description="Order Online for Touchless Deliver"
            backgroungImg="img2.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
           /> 
           <Section 
            title="Model 3"
            description="Order Online for Touchless Deliver"
            backgroungImg="img3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
           /> 
           <Section 
            title="Model X"
            description="Order Online for Touchless Deliver"
            backgroungImg="img6.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
           /> 
           <Section 
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroungImg="solarimg1.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
           />  
           <Section 
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroungImg="solarimg2.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
           />  
           <Section 
            title="Accessories"
            description="Money-back guarantee"
            backgroungImg="img4.jpg"
            leftBtnText="Order now"
           
           />  
            

        </Container>
    )
}

export default Home

const Container = styled.div `
    height: 100vh;
`
