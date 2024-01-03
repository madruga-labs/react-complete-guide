import CoreConcepts from './components/CoreConcept'
import Header from './components/Header';
import { TabsButtons } from './components/Tabs';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <CoreConcepts />
        </section>
        <TabsButtons></TabsButtons>
      </main>
    </div>
  );
}

export default App;
