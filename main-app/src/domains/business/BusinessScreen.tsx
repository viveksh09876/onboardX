import { useEffect } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_DYNAMIC_QUESTIONS } from "../../graphql/queries/getDynamicQuestions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setDynamicQuestions } from "../../store/formSlice";
import FormRenderer from "../../form-engine/FormRenderer";
import { businessFormConfig } from "./business.form";
import type {
  GetDynamicQuestionsResponse,
  GetDynamicQuestionsVars,
} from "../../graphql/types";

const BusinessScreen = () => {
  const dispatch = useAppDispatch();
  const input = useAppSelector((s) => s.form.formData.personal);

  const { data } = useQuery<
    GetDynamicQuestionsResponse,
    GetDynamicQuestionsVars
  >(GET_DYNAMIC_QUESTIONS, {
    variables: {
      screen: "business",
      previousData: input,
    },
  });

  useEffect(() => {
    if (data?.getDynamicQuestions) {
      dispatch(
        setDynamicQuestions({
          domain: "business",
          questions: data.getDynamicQuestions,
        })
      );
    }
  }, [data, dispatch]);

  return (
    <FormRenderer
      domain="business"
      config={businessFormConfig}
      nextRoute="/teams"
    />
  );
};

export default BusinessScreen;
