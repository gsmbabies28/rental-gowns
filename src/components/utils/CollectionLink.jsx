
const CollectionNavLink = () => {
  return (
    <div className="bg-cyan-50 text-cyan-600 w-full mt-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center py-6 md:py-14 underline underline-offset-4 text-sm">
            <a href="/collections/tops">
                TOPS
            </a>
           <a href="/collections/bottoms">
                BOTTOMS
            </a>
           <a href="/collections/sets">
                SETS
            </a>
           <a href="/collections/casuals">
                CASUAL
            </a>
           <a href="/collections/gowns">
                GOWNS
            </a>
           <a href="/collections/tuxedos">
                TUXEDOS
            </a>
       </div>
    </div>
  )
}

export default CollectionNavLink