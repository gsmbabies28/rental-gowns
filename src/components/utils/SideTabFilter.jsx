import colors from "./colors";
import  SideTabListInput from "./SideTabListInput";
import { SideTabInput } from "./SideTabListInput";
import ShopPageContext from "../../UseContext/ShopPageContext";
import { useContext } from "react";

const SideTabFilter = () => {
  const {location} = useContext(ShopPageContext);
  let inputToShow;

  switch(location.pathname) {
    case "/collections/bottoms":
      inputToShow = (
        <SideTabInput 
            label={'Bottom'}
            name={'category_type'}
            type={'checkbox'}
            value={'bottom'}
        />
      );
      break;
    
    case "/collections/tops":
      inputToShow = (
        <SideTabInput 
            label={'Top'}
            name={'category_type'}
            type={'checkbox'}
            value={'top'}
        />
      );
      break;
    
    case "/collections/sets":
      inputToShow = (
        <SideTabInput 
            label={'Set'}
            name={'category_type'}
            type={'checkbox'}
            value={'set'}
        />
      );
      break;

    case "/collections/all":
      inputToShow = (
        <>
          <SideTabInput 
            label={'Bottom'}
            name={'category_type'}
            type={'checkbox'}
            value={'bottom'}
          />
          <SideTabInput 
            label={'Top'}
            name={'category_type'}
            type={'checkbox'}
            value={'top'}
          />
          <SideTabInput 
            label={'Set'}
            name={'category_type'}
            type={'checkbox'}
            value={'set'}
          />
          <SideTabInput 
            label={'Dress'}
            name={'category_type'}
            type={'checkbox'}
            value={'dress'}
          />
        </>
      );
  }
  return (
    <>
      <ul className="space-y-4 text-xl">
        <SideTabListInput headerTitle={'Browse Collection'} > 
            <SideTabInput 
              label={'Wedding'}
              name={'collections'}
              value={'weddings'}
              type={'radio'}
            />
            <SideTabInput 
              label={'Casual'}
              name={'collections'}
              value={'casuals'}
              type={'radio'}
            />
            <SideTabInput 
              label={'Cocktail'}
              name={'collections'}
              value={'cocktails'}
              type={'radio'}
            />
            <SideTabInput 
              label={'Tuxedos'}
              name={'collections'}
              value={'tuxedos'}
              type={'radio'}
            />
            <SideTabInput 
              label={'Gowns'}
              name={'collections'}
              value={'gowns'}
              type={'radio'}
            />
        </SideTabListInput>

        <SideTabListInput headerTitle={'Product Type'} > 
          {inputToShow}
        </SideTabListInput>

        <SideTabListInput headerTitle={'Availability'} > 
          <SideTabInput 
            label={'Available'}
            name={'available  '}
            type={'checkbox'}
            value={'true'}
          />
          <SideTabInput 
            label={'Rented'}
            name={'rented'}
            type={'checkbox'}
            value={'true'}
          />
        </SideTabListInput>

        <SideTabListInput headerTitle={'Colors'} > 
          {colors.map(item=>(
            <SideTabInput
              key={item} 
              label={item}
              name={'color'}
              type={'checkbox'}
              value={item.toLowerCase()}
            />
          ))}
        </SideTabListInput>

        <SideTabListInput headerTitle={'Price Range'} >
          <SideTabInput 
            name={'minPrice'}
            type={'number'}
            placeHolder={'Minimum Price'}
          />
          <SideTabInput 
            name={'maxPrice'}
            type={'number'}
            placeHolder={'Maximum Price'}
          />
        </SideTabListInput>    
      </ul>
    </>
  );
};

export default SideTabFilter;
