import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXJ8ZW58MHx8MHx8fDA%3D',
      intro: 'I’m a passionate programmer who enjoys turning ideas into functional, efficient solutions. I focus on writing clean, scalable code and constantly improving my problem-solving skills.',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGVyfGVufDB8fDB8fHww',
      intro: 'As a developer, I specialize in building reliable and user-friendly applications. I enjoy learning new technologies and applying them to real-world problems.',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kZXJ8ZW58MHx8MHx8fDA%3D',
      intro: 'I’m a curious and detail-oriented programmer who loves exploring how things work under the hood. Writing optimized, maintainable code is what drives me every day.',
      tag: 'Underbanked'
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
