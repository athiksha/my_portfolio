import React from 'react';
import profile from './profile.png';
import './App.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
// Grid removed: using Box-based layout for Education section
import ComputerIcon from '@mui/icons-material/Computer';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

type PortfolioLayoutProps = {
  brand?: string;
};

export default function PortfolioLayout({ brand = "Athiksha Venkannagari" }: PortfolioLayoutProps) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const contactItems = [
    {
      icon: <LinkedInIcon />,
      href: "https://linkedin.com/in/athiksha",
      label: "LinkedIn",
    },
    {
      icon: <GitHubIcon />,
      href: "https://github.com/athiksha",
      label: "GitHub",
    },
    { icon: <EmailIcon />, href: "mailto:avenkann@gmu.edu", label: "Email" },
  ];

  const drawerItems = [
    { icon: <HomeIcon />, text: "Home", id: "home" },
    { icon: <InfoIcon />, text: "About", id: "about" },
    { icon: <WorkHistoryIcon />, text: "Experience", id: "experience" },
    { icon: <BuildIcon />, text: "Skills", id: "skills" },
    { icon: <WorkIcon />, text: "Projects", id: "projects" },
    { icon: <SchoolIcon />, text: "Education", id: "education" },
    { icon: <ContactMailIcon />, text: "Contact", id: "contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (!isMdUp) setMobileOpen(false);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 240,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Close button for mobile */}
      {!isMdUp && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ alignSelf: "flex-end", m: 1 }}
        >
          <CloseIcon />
        </IconButton>
      )}

      <Divider />
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item.id)}
              sx={{
                borderRadius: 2,
                mx: 1,
                my: 0.5,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' },
                color: 'inherit',
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#007acc15",
          color: "black",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {!isMdUp && (
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
            <Avatar sx={{ bgcolor: '#070809ff', width: 32, height: 32, fontSize: 14, mr: 1 }}>
              {brand
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('')}
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {brand}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {contactItems.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <IconButton
                  color="inherit"
                  component="a"
                  href={item.href}
                  target="_blank"
                >
                  {item.icon}
                </IconButton>
                {isMdUp && (
                  <Typography variant="body2" sx={{ color: "inherit" }}>
                    {item.label}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

  <Toolbar />

      {/* Drawer */}
      <Box component="nav" sx={{ width: { md: 240 }, flexShrink: { md: 0 } }}>
        <Drawer
          variant={isMdUp ? "permanent" : "temporary"}
          open={isMdUp ? true : mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              mt: { xs: 7, md: 8 },
            //  background: 'linear-gradient(135deg, #E3F2FD 0%, #F5F9FF 100%)',
              color: 'black',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          //p: { xs: 2, md: 3 },
          mt: 0,
          backgroundColor: "#E3F2FD",
        }}
      >
        {/* Home Section */}
        <Box
  id="home"
  sx={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 4,
    background: "#E3F2FD",
  }}
>
  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <Box sx={{ width: '100%', maxWidth: 900, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 3, md: 3 }, alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ flex: '0 1 560px', pr: { md: 4 }, pl: { xs: 2, md: 0 }, maxWidth: { xs: '100%', md: 560 } }}>
      <Typography variant="h3" fontWeight={500} gutterBottom>
        Hello, I am Athiksha
      </Typography>

      {/* <Typography variant="h5" color="text.secondary" gutterBottom>
        SAP ABAP Developer | 2 Years at TCS
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        Master's in CS from GMU |
         Aspiring SAP Full Stack Developer
      </Typography> */}

<Stack direction="row" spacing={1} sx={{ mb: 2 }}>
  <Typography variant="body1" component="span">
   Exploring SAP RAP, BTP, Cloud & Fiori | Aspiring Full Stack SAP Developer
  </Typography>
</Stack>

      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
  <Chip label="SAP ABAP Developer" color="primary" variant="outlined" />
  <Chip label="2 Years at TCS" color="primary" variant="outlined" />
  <Chip label="MSc in CS from GMU" color="info" variant="outlined" />
  {/* <Chip label="Aspiring SAP Full Stack Developer" color="success" variant="outlined" /> */}
</Stack>

{/* <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
  <Chip label="Aspiring SAP Full Stack Developer" color="success" variant="outlined" />
</Stack> */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="/resume.pdf"
        target="_blank"
        sx={{ borderRadius: "50px", px: 4 }}
      >
        Download Resume
      </Button>
    </Box>

  <Box sx={{ flex: '0 0 320px', display: 'flex', justifyContent: 'center' }}>
        <Avatar
          src={profile}
          alt="Athiksha"
          sx={{
            width: { xs: 160, md: 260 },
            height: { xs: 160, md: 260 },
            boxShadow: 6,
            border: "5px solid white",
          }}
        />
      </Box>
    </Box>
  </Box>
</Box>

        {/* About Section */}
        <Box
          id="about"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          {/* <Card sx={{ maxWidth: 800, p: 2, boxShadow: 3 }}> */}
            <Card sx={{ maxWidth: 900, p: 3, borderRadius: 3, boxShadow: 4 }}>
            {/* <CardContent>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                I am a SAP ABAP Developer with 2 years of hands-on experience at 
                Tata Consultancy Services (TCS), where I've worked on various SAP projects 
                and honed my technical skills in enterprise software development.
              </Typography>
              <Typography variant="body1" paragraph>
                As a recent graduate from George Mason University, I'm passionate about 
                expanding my expertise in the SAP ecosystem and transitioning into a 
                Full Stack SAP Developer role. I combine my academic foundation with 
                real-world industry experience to deliver effective solutions.
              </Typography>
              <Typography variant="body1">
                I'm always eager to take on new challenges and contribute to innovative 
                projects that drive business success through technology.
              </Typography>
            </CardContent> */}
            <Typography variant="h4" fontWeight={700} gutterBottom>
  About Me
</Typography>

<Typography variant="body1" paragraph>
  I am an SAP ABAP Developer with 2 years of experience at Tata Consultancy Services (TCS), 
  where I worked on diverse SAP projects and gained strong expertise in ABAP, enhancements, 
  SmartForms, ALVs, and cross-functional modules. This hands-on experience gave me a solid 
  foundation in enterprise application development and problem-solving.
</Typography>

<Typography variant="body1" paragraph>
  I recently completed my Master’s in Computer Science at George Mason University, where I 
  deepened my knowledge in software development, cloud technologies, and data analytics. 
  During this time, I also explored projects that combined both academic rigor and 
  practical implementation.
</Typography>

<Typography variant="body1" paragraph>
  Currently, I am expanding my expertise into the latest SAP technologies including 
  RAP (RESTful ABAP), SAP BTP, Fiori, and Cloud, with the goal of becoming a 
  Full Stack SAP Developer. I enjoy bridging traditional ERP development with modern 
  innovations to deliver scalable and business-focused solutions.
</Typography>

<Typography variant="body1">
  Beyond my technical work, I am passionate about continuous learning and enjoy working on 
  projects that make an impact, whether it’s simplifying business processes, optimizing 
  workflows, or bringing modern UX with Fiori apps. I look forward to contributing to 
  innovative projects and growing as a well-rounded SAP professional.
</Typography>

          </Card>
        </Box>

    {/* Experience Section */}
<Box
  id="experience"
  sx={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 2,
    py: 6,
  }}
>
  <Card sx={{ maxWidth: 900, p: 3, borderRadius: 3, boxShadow: 4 }}>
    <Typography variant="h4" fontWeight={700} gutterBottom>
      Experience
    </Typography>

    <Timeline position="alternate">
      {/* TCS */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight={600}>
            Tata Consultancy Services (TCS)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            SAP ABAP Developer | 2021 – 2023
          </Typography>
          <Typography variant="body1">
            Developed and maintained SAP applications using ABAP, SmartForms,
            and ALV. Collaborated with cross-functional teams to deliver
            enterprise solutions that improved business processes.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* GMU */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight={600}>
            George Mason University
          </Typography>
          <Typography variant="body2" color="text.secondary">
             | 2023 – 2025
          </Typography>
          <Typography variant="body1">
            Student Data Associate
          </Typography>
          <Typography variant="body2">
            Managed and analyzed student data to support university operations
            and reporting. Assisted in data integrity and process improvements.
          </Typography> 
        </TimelineContent>
      </TimelineItem>

      {/* Future */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight={600}>
           Present
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2025 →
          </Typography>
          <Typography variant="body1">
            Research Assistant
          </Typography>
          <Typography variant="body2">
            Assisting in research projects focused on human interaction with computer systems,
            exploring innovative solutions to enhance user experience and accessibility.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </Card>
</Box>

{/* Skills Section */}
<Box
  id="skills"
  sx={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 2,
  }}
>
  <Card sx={{ maxWidth: 900, p: 3, borderRadius: 3, boxShadow: 4 }}>
    <Typography variant="h4" fontWeight={700} gutterBottom align="center">
      Skills
    </Typography>
    <Box sx={{ width: '100%' }}>
    {[
      {
        category: "SAP Technologies",
        skills: [
          "SAP ABAP",
          "SAP RAP",
          "SAP Fiori",
          "SAP BTP",
          "BADI & Enhancements",
          "OData / RFC / BAPI",
          "ALV Reports",
          "SmartForms",
          "SAP UI5",
          "SAP HANA"
        ],
        color: "#0fbbf1"
      },
      {
        category: "Programming Languages",
        skills: ["ABAP", "Python", "TypeScript", "JavaScript", "SQL"],
        color: "#007acc"
      },
      {
        category: "Full Stack Development",
        skills: ["React", "Node.js", "REST APIs", "Material-UI", "Bootstrap", "HTML/CSS"],
        color: "#61dafb"
      },
      {
        category: "Data & Analytics",
        skills: ["Power BI", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"],
        color: "#4dabcf"
      },
      {
        category: "Cloud & DevOps",
        skills: ["AWS (S3, EC2)", "Git", "Firebase", "CI/CD"],
        color: "#ff9900"
      }
    ].map((category) => (
      <Box key={category.category} sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, color: category.color, fontWeight: 600 }}>
          {category.category}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {category.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                bgcolor: `${category.color}15`,
                border: `1px solid ${category.color}`,
                color: 'text.primary',
                '&:hover': {
                  bgcolor: `${category.color}30`,
                }
              }}
            />
          ))}
        </Stack>
      </Box>
    ))}
    </Box>
  </Card>
</Box>

{/* Projects Section */}
<Box
  id="projects"
  sx={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    px: 2,
    py: 6,
  }}
>
  <Typography 
    variant="h4" 
    fontWeight={700} 
    gutterBottom
    sx={{
      mb: 4,
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '4px',
        backgroundColor: '#61dafb',
        borderRadius: '2px'
      }
    }}
  >
    Featured Projects
  </Typography>

  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 4,
      justifyContent: "center",
      maxWidth: 1200,
    }}
  >
    <Card
      sx={{
        width: 380,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(97, 218, 251, 0.2)",
        },
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: 200,
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'rgba(97, 218, 251, 0.1)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          T
        </Typography>
      </Box>
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h6" 
          sx={{
            fontWeight: 600,
            color: '#61dafb',
            mb: 2
          }}
        >
          TechMate – Digital Helper for Seniors
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          paragraph
          sx={{ 
            mb: 3,
            lineHeight: 1.6 
          }}
        >
          Voice-first AI assistant designed to help seniors navigate modern technology with confidence.
          Features real-time GPT-4 powered assistance, interactive tutorials, and family support integration.
        </Typography>
        <Stack 
          direction="row" 
          spacing={1} 
          sx={{ 
            mt: 'auto',
            mb: 3, 
            flexWrap: 'wrap', 
            gap: 1 
          }}
        >
          <Chip label="React" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="TypeScript" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="Flask" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="GPT-4" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="Firebase" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="Bootstrap" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
        </Stack>
        <Button
          variant="outlined"
          href="https://github.com/athiksha/techmate"
          target="_blank"
          sx={{
            color: '#61dafb',
            borderColor: '#61dafb',
            '&:hover': {
              borderColor: '#61dafb',
              backgroundColor: 'rgba(97, 218, 251, 0.1)',
            }
          }}
        >
          View Code
        </Button>
      </Box>
    </Card>

    <Card
      sx={{
        width: 380,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(97, 218, 251, 0.2)",
        },
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: 200,
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'rgba(97, 218, 251, 0.1)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          G
        </Typography>
      </Box>
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h6" 
          sx={{
            fontWeight: 600,
            color: '#61dafb',
            mb: 2
          }}
        >
          Game Analytics Dashboard 
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          paragraph
          sx={{ 
            mb: 3,
            lineHeight: 1.6 
          }}
        >
          Comprehensive Power BI dashboard analyzing gaming platform performance and user engagement.
          Delivered actionable insights leading to 60% growth in monthly active users.
        </Typography>
        <Stack 
          direction="row" 
          spacing={1} 
          sx={{ 
            mt: 'auto',
            mb: 3, 
            flexWrap: 'wrap', 
            gap: 1 
          }}
        >
          <Chip label="Power BI" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="DAX" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="Data Analytics" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="SQL" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
        </Stack>
        <Button
          variant="outlined"
          href="https://github.com/athiksha/PowerBI-Game-Analytics"
          target="_blank"
          sx={{
            color: '#61dafb',
            borderColor: '#61dafb',
            '&:hover': {
              borderColor: '#61dafb',
              backgroundColor: 'rgba(97, 218, 251, 0.1)',
            }
          }}
        >
          View Code
        </Button>
      </Box>
    </Card>
    <Card
      sx={{
        width: 380,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(97, 218, 251, 0.2)",
        },
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: 200,
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'rgba(97, 218, 251, 0.1)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          B
        </Typography>
      </Box>
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h6" 
          sx={{
            fontWeight: 600,
            color: '#61dafb',
            mb: 2
          }}
        >
          Bank Churn Prediction Model
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          paragraph
          sx={{ 
            mb: 3,
            lineHeight: 1.6 
          }}
        >
          Machine learning model achieving 85% accuracy in predicting customer churn for financial institutions.
          Implemented advanced feature selection and optimization techniques for actionable customer retention insights.
        </Typography>
        <Stack 
          direction="row" 
          spacing={1} 
          sx={{ 
            mt: 'auto',
            mb: 3, 
            flexWrap: 'wrap', 
            gap: 1 
          }}
        >
          <Chip label="Python" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="Scikit-learn" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="Pandas" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="NumPy" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="Matplotlib" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="Seaborn" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
        </Stack>
        <Button
          variant="outlined"
          href="https://github.com/athiksha/Bank_Churn_Prediction"
          target="_blank"
          sx={{
            color: '#61dafb',
            borderColor: '#61dafb',
            '&:hover': {
              borderColor: '#61dafb',
              backgroundColor: 'rgba(97, 218, 251, 0.1)',
            }
          }}
        >
          View Code
        </Button>
      </Box>
    </Card>
    <Card
      sx={{
        width: 380,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(97, 218, 251, 0.2)",
        },
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: 200,
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'rgba(97, 218, 251, 0.1)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          P
        </Typography>
      </Box>
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h6" 
          sx={{
            fontWeight: 600,
            color: '#61dafb',
            mb: 2
          }}
        >
          My Portfolio Website
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          paragraph
          sx={{ 
            mb: 3,
            lineHeight: 1.6 
          }}
        >
          Modern, responsive portfolio website showcasing professional experience and technical projects.
          Features clean component architecture, interactive sections, and custom Material-UI theming.
        </Typography>
        <Stack 
          direction="row" 
          spacing={1} 
          sx={{ 
            mt: 'auto',
            mb: 3, 
            flexWrap: 'wrap', 
            gap: 1 
          }}
        >
          <Chip label="React" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="TypeScript" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="Material-UI" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="CSS" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
          <Chip label="Responsive Design" size="small" sx={{ bgcolor: '#61dafb15', border: '1px solid #61dafb', color: 'text.primary' }} />
        </Stack>
        <Button
          variant="outlined"
          href="https://github.com/athiksha/my_portfolio"
          target="_blank"
          sx={{
            color: '#61dafb',
            borderColor: '#61dafb',
            '&:hover': {
              borderColor: '#61dafb',
              backgroundColor: 'rgba(97, 218, 251, 0.1)',
            }
          }}
        >
          View Code
        </Button>
      </Box>
    </Card>
  </Box>
</Box>


{/* Education Section */}
<Box id="education" sx={{ minHeight: "60vh", py: 6, px: 2 }}>
  <Typography
    variant="h4"
    fontWeight={700}
    gutterBottom
    align="center"
    sx={{ mb: 4 }}
  >
    Education
  </Typography>

  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
    <Box sx={{ flex: '1 1 320px', maxWidth: 520 }}>
      <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
        <SchoolIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
        <Typography variant="h6" fontWeight={600}>
          Master’s in Computer Science
        </Typography>
        <Typography variant="body2" color="text.secondary">
          George Mason University
        </Typography>
        <Typography variant="caption" color="text.secondary">
          2023 – 2025
        </Typography>
      </Card>
    </Box>

    <Box sx={{ flex: '1 1 320px', maxWidth: 520 }}>
      <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
        <ComputerIcon sx={{ fontSize: 50, color: "secondary.main", mb: 2 }} />
        <Typography variant="h6" fontWeight={600}>
          Bachelor’s in Computer Science
        </Typography>
        <Typography variant="body2" color="text.secondary">
          St. Martin’s Engineering College
        </Typography>
        <Typography variant="caption" color="text.secondary">
          2017 – 2021
        </Typography>
      </Card>
    </Box>
  </Box>
</Box>

{/* Contact Section */}
<Box 
  id="contact" 
  sx={{ 
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    py: 6,
    px: 2,
    background: '#E3F2FD',
  }}
>
  <Typography 
    variant="h4" 
    fontWeight={700} 
    gutterBottom 
    sx={{
      mb: 4,
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '4px',
        backgroundColor: '#61dafb',
        borderRadius: '2px'
      }
    }}
  >
    Let's Connect!
  </Typography>

  <Box 
    sx={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: 3, 
      justifyContent: 'center',
      maxWidth: 1000,
    }}
  >
    <Card 
      sx={{ 
        p: 3, 
        width: 280,
        borderRadius: 3,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 6,
          bgcolor: '#E3F2FD'
        }
      }}
      component="a"
      href="mailto:avenkann@gmu.edu"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <EmailIcon sx={{ fontSize: 40, color: '#61dafb' }} />
        <Typography variant="h6" fontWeight={600}>
          Email
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          avenkann@gmu.edu
        </Typography>
        <Chip 
          label="Send Email" 
          sx={{ 
            mt: 1,
            bgcolor: '#61dafb15',
            border: '1px solid #61dafb',
            color: 'text.primary'
          }} 
        />
      </Box>
    </Card>

    <Card 
      sx={{ 
        p: 3, 
        width: 280,
        borderRadius: 3,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 6,
          bgcolor: '#E3F2FD'
        }
      }}
      component="a"
      href="https://linkedin.com/in/athiksha"
      target="_blank"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <LinkedInIcon sx={{ fontSize: 40, color: '#61dafb' }} />
        <Typography variant="h6" fontWeight={600}>
          LinkedIn
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          let's connect on LinkedIn
        </Typography>
        <Chip 
          label="View Profile" 
          sx={{ 
            mt: 1,
            bgcolor: '#61dafb15',
            border: '1px solid #61dafb',
            color: 'text.primary'
          }} 
        />
      </Box>
    </Card>

    <Card 
      sx={{ 
        p: 3, 
        width: 280,
        borderRadius: 3,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 6,
          bgcolor: '#E3F2FD'
        }
      }}
      component="a"
      href="https://github.com/athiksha"
      target="_blank"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <GitHubIcon sx={{ fontSize: 40, color: '#61dafb' }} />
        <Typography variant="h6" fontWeight={600}>
          GitHub
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Check out my code repositories
        </Typography>
        <Chip 
          label="View Projects" 
          sx={{ 
            mt: 1,
            bgcolor: '#61dafb15',
            border: '1px solid #61dafb',
            color: 'text.primary'
          }} 
        />
      </Box>
    </Card>
  </Box>

  <Typography 
    variant="body1" 
    sx={{ 
      mt: 6, 
      textAlign: 'center',
      color: 'text.secondary',
      maxWidth: 600
    }}
  >
    I'm always interested in hearing about new opportunities and collaborations.
    Feel free to reach out!
  </Typography>
</Box>

    </Box>
  </Box>

  );
}