import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../shared/Button.tsx";
import { Input } from "../shared/Input.tsx";

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export function IpForm({
  value,
  onSubmit,
}: {
  value: string;
  onSubmit: (e: string) => void;
}) {
  const { control, setValue, handleSubmit } = useForm({
    defaultValues: {
      ipAddress: value,
    },
  });

  useEffect(() => {
    if (value) {
      setValue("ipAddress", value);
    }
  }, [value]);

  const onSubmitHandler = (data: { ipAddress: string }) => {
    onSubmit(data.ipAddress);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmitHandler)}>
      <Controller
        name="ipAddress"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Search for any IP address" />
        )}
      />
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
}
