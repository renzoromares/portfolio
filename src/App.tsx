import { Content } from "./components/content/content"
import { LinkDownload } from "./components/links/linkDownload"
import { Sidebar } from "./components/sidebar/sidebar"
import Toggle from "./components/toggle/toggle"

function App() {
  return (
    <div className="relative flex justify-between App">
      <Toggle />
      <Sidebar />
      <Content />
      <LinkDownload 
        link={"#"}
        classDownload={"slg:left-[25px] slg:bottom-[30px] slg:semi-bold tblg:block bottom-[40px] left-[40px] fixed hidden"}
        text={"Download CV"}
      />
    </div>
  )
}

export default App