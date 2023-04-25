import Navigation from 'components/Navigation';

export default function AppBar() {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #2A363B',
      marginBottom: '20px',
    },
  };
  return <header style={styles.header}>{<Navigation />}</header>;
}
