const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: { xs: '12px 20px', md: '16px 40px' },
    transition: 'all 0.3s ease',
  },
  logo: {
    color: '#2563eb',
    fontWeight: 800,
    fontSize: '24px',
    fontFamily: "'Inter', sans-serif",
    textDecoration: 'none',
    border: '2px solid #2563eb',
    padding: '2px 8px',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#2563eb',
      color: '#fff',
    },
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  mobileMenuBtn: {
    display: 'none',
    '@media (max-width: 900px)': {
      display: 'block',
    },
  },
  navLink: {
    color: '#64748b',
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#2563eb',
    },
  },
  resumeBtn: {
    color: '#2563eb',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    textDecoration: 'none',
    padding: '8px 16px',
    border: '1px solid #2563eb',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#2563eb',
      color: '#fff',
    },
  },
};

export default styles;