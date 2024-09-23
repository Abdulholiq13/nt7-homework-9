import { api } from "../api/index";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    checkUserQuery: build.query({
      query: () => ({
        url: "/auth/profile",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || null}`,
        },
      }),
    }),
    signInRequest: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),

      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("Response data:", data);
          localStorage.setItem("token", data?.payload?.accessToken || "");
        } catch (error) {
          console.error("Failed to save token:", error);
        }
      },
    }),
    signUpRequest: build.mutation({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("Response data:", data);
          localStorage.setItem("token", data?.payload?.accessToken || "");
        } catch (error) {
          console.error("Failed to save token:", error);
        }
      },
    }),
    otpVerifyRequest: build.mutation({
      query: (body) => ({
        url: "/auth/send-otp",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignInRequestMutation, useSignUpRequestMutation, useOtpVerifyRequestMutation, useCheckUserQueryQuery } =
  authApi;
