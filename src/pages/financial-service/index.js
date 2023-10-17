import TopBar from "../../components/topbar";
import CardCategoryFinancial from "../../components/financial-service/card-category-financial";
import Footer from "../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const FinancialService = () => {
  const { formCategory, getServices } = useSelector(
    (state) => state.briQueReducer
  );

  const navigate = useNavigate();
  const navigatePage = () => {
    navigate("/foto-nasabah");
  };

  let { id } = useParams();

  console.log(getServices);

  return (
    <section>
      <TopBar>
        Layanan{" "}
        {formCategory.categories?.find((data) => data.name === id).displayName}
      </TopBar>
      <div className="my-7 flex justify-center h-fit items-center">
        <div className="space-y-3 w-8/12">
          <h1 className="text-white text-lg font-semibold">
            Pilih Reservasi Transaksi
          </h1>
          {formCategory.categories
            ?.find((data) => data.name === id)
            .forms?.map((datas, index) => (
              <CardCategoryFinancial
                data={datas}
                key={index}
                service={id}
                getServices={getServices}
              />
            ))}
        </div>
      </div>
      <Footer
        btnDisabled={
          !getServices.length || getServices.length > 8 ? true : false
        }
        onClick={navigatePage}>
        Selanjutnya
      </Footer>
    </section>
  );
};

export default FinancialService;
