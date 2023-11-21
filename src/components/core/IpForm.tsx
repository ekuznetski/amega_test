import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { colors } from "../../styles.ts";
import { Button } from "../shared/Button.tsx";
import { Input } from "../shared/Input.tsx";

const FormWrapper = styled.form`
  display: flex;
  align-items: start;
  gap: 15px;
`;

const ErrorMessage = styled.div`
  color: ${colors.error};
  font-weight: bold;
  text-align: center;
`;

export function IpForm({
  value,
  onSubmit,
}: {
  value: string;
  onSubmit: (e: string) => void;
}) {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ipAddress: value,
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (value) {
      setValue("ipAddress", value);
    }
  }, [value, setValue]);

  const validateIP = (ip: string) => {
    const ipRegex =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip) || "Invalid IP address";
  };

  const onSubmitHandler = (data: { ipAddress: string }) => {
    onSubmit(data.ipAddress);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <Controller
          name="ipAddress"
          control={control}
          rules={{ validate: validateIP }}
          render={({ field }) => (
            <Input {...field} placeholder="Search for any IP address" />
          )}
        />
        {errors.ipAddress && (
          <ErrorMessage>{errors.ipAddress.message}</ErrorMessage>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
}
