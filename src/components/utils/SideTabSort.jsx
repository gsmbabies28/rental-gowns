import SideTabListInput from "./SideTabListInput"
import { SideTabInput } from "./SideTabListInput"
const SideTabSort = () => {
  return (
    <>
        <ul className="space-y-4 text-xl">
            <SideTabListInput headerTitle={'Sort by price'} > 
                <SideTabInput 
                label={'Highest'}
                name={'sort'}
                value={'highPrice'}
                type={'radio'}
                typeQueries = {'toggle'}
                />
                <SideTabInput 
                label={'Lowest'}
                name={'sort'}
                value={'lowPrice'}
                type={'radio'}
                typeQueries = {'toggle'}                
                />
            </SideTabListInput>
            <SideTabListInput headerTitle={'Sort by Name'} > 
                <SideTabInput 
                label={'A-Z'}
                name={'sort'}
                value={'asc'}
                type={'radio'}
                typeQueries = {'toggle'}
                />
                <SideTabInput 
                label={'Z-A'}
                name={'sort'}
                value={'desc'}
                type={'radio'}
                typeQueries = {'toggle'}                
                />
            </SideTabListInput>
            <SideTabListInput headerTitle={'Sort by Date'} > 
                <SideTabInput 
                label={'Newest'}
                name={'sort'}
                value={'newest'}
                type={'radio'}
                typeQueries = {'toggle'}
                />
                <SideTabInput 
                label={'Oldest'}
                name={'sort'}
                value={'oldest'}
                type={'radio'}
                typeQueries = {'toggle'}                
                />
            </SideTabListInput>
        </ul>
    </>
  )
}

export default SideTabSort