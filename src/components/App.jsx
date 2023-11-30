import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import userData from '../json/user.json';
import data from '../json/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <Profile {...userData} /> */}
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
    </div>
  );
};
