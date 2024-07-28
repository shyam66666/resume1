import React from 'react';
import { Container, Box, Typography, Grid, Paper, Divider, Button } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Projects from './Projects';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const downloadPDF = () => {
    const element = document.getElementById('resume-content');
    const opt = {
      
      filename: 'Resume_Peddi_Shyam_Kumar.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 }, // Increase the scale for better quality
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={10} sx={{ padding: '25px', width: '100%', maxWidth: "90vw", marginTop: '20px', marginBottom: '20px' }}>
        <Box my={4} mx={3} id="resume-content">
          <Header />
          <ResumeSection title="EDUCATION" content={educationContent} />
          <ResumeSection title="SKILLS" content={experienceContent} />
          <ResumeSection title="PROJECTS" content={skillsContent} />
          <ResumeSection title="CERTIFICATES & INTERNSHIPS" content={certificates} />
          <ResumeSection title="POSITIONS OF RESPONSIBILITIES" content={technical} />
        </Box>
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="primary" onClick={downloadPDF}>
            Download as PDF
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

const Header = () => (
  <Box mb={2} textAlign="center">
    <Typography variant="h4" component="h1" sx={{ fontFamily: 'Times New Roman', fontWeight: 'bold', pb: '10px' }}>
      Peddi Shyam Kumar
    </Typography>
    <Typography variant="body1" component="p" sx={{ display: 'inline', margin: '0 10px' }}>
      <LocalPhoneIcon /> +91 8179768852
    </Typography>
    <Typography variant="body1" component="p" sx={{ display: 'inline', margin: '0 10px' }}>
      <LinkedInIcon /> <a href="https://www.linkedin.com/in/peddishyamkumar" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        linkedin.com/in/peddishyamkumar
      </a>
    </Typography>
    <Typography variant="body1" component="p" sx={{ display: 'inline', margin: '0 10px' }}>
      <a href="mailto:peddishyamkumar@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
        <MailIcon /> peddishyamkumar@gmail.com
      </a>
    </Typography>
  </Box>
);

const ResumeSection = ({ title, content }) => (
  <Box mb={1}>
    <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>
      {title}
    </Typography>
    <Divider sx={{ borderBottom: '2px solid gray', marginBottom: '10px' }} />
    {content}
  </Box>
);

const educationContent = (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box pl={2}>
        <Typography variant="h6" style={{ fontSize: 'medium', color: '#333' }}>
          • Completed B. Tech., in Mechanical Engineering with an aggregate of 7.0 CGPA from Vardhaman College of Engineering, affiliated with Jawaharlal Nehru Technological University (JNTUH), in 2024.
        </Typography>
        <br />
        <Typography variant="h6" style={{ fontSize: 'medium', color: '#333' }}>
          • Completed Intermediate education with an aggregate of 9.34 CGPA from Narayana Junior College affiliated to Board of Intermediate Education, TG in 2020.
        </Typography>
        <br />
        <Typography variant="h6" style={{ fontSize: 'medium', color: '#333' }}>
          • Completed Secondary School of education from Aryabhatta High School with an aggregate of 8.5 GPA in 2018.
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

const experienceContent = (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box pl={2}>
        <Typography variant="h6" style={{ fontSize: 'medium', color: '#333' }}>
          <span style={{ fontWeight: 'bold' }}>Front End:</span> HTML, CSS, JavaScript — Library: React.js — framework: MUI (Material-UI)
        </Typography>
        <Typography variant="h6" style={{ fontSize: 'medium', color: '#333' }}>
          <span style={{ fontWeight: 'bold' }}>Programming Language:</span> Python Scripting (Basic Knowledge)
        </Typography>
        <Typography variant="h6" style={{ fontSize: 'medium', color: '#333' }}>
          <span style={{ fontWeight: 'bold' }}>Virtualization Tools:</span> VMware Workstation
        </Typography>
        <Typography variant="h6" style={{ fontSize: 'medium', color: '#333' }}>
          <span style={{ fontWeight: 'bold' }}>Engineering Design Tools:</span> AutoCAD, Fusion 360, CATIA, Solid works.
        </Typography>
        <Typography variant="h6" style={{ fontSize: 'medium', color: '#333' }}>
          <span style={{ fontWeight: 'bold' }}>SoftSkills:</span> Communication skills, Leadership Quality, Business Strategy, TeamWork
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

const skillsContent = (
  <Grid container spacing={2}>
     
    <Grid item xs={12}>
      <Box pl={2}>

        <Projects />
      </Box>
    </Grid>
 
  </Grid>
    
);


const certificates = (
  <Grid container spacing={2}>
    
    <Grid item xs={12}>
      <Box pl={2}>
        <Typography style={{ fontSize: 'medium', color: '#333' }}>
          • ICS | solid works 3D design software certificate in 2022.
        </Typography>
        <br />
        <Typography style={{ fontSize: 'medium', color: '#333' }}>
          • CAMPX | TRUPEE: Worked on Trupee project to build various React components in 2024.
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

const technical = (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box pl={2}>
        <Typography style={{ fontSize: 'medium', color: '#333' }}>
          • Attended Workshop on “STEAM TURBINES” conducted by ‘(BHEL) BHARAT HEAVY ELECTRICAL LIMITED’.
        </Typography>
        <br />
        <Typography style={{ fontSize: 'medium', color: '#333' }}>
          • Presented an Instruction following ROBOT in 2020 Science square conducted by Vardhaman college.
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

const Footer = () => (
  <Box mt={4} textAlign="center">
    {/* Footer content here */}
  </Box>
);

export default Resume;
