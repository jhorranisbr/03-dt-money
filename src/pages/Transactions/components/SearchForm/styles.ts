import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    border-radius: 6px;
    border: 0;

    color: ${({ theme }) => theme['gray-300']};
    background: ${({ theme }) => theme['gray-900']};

    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;

    color: ${({ theme }) => theme['green-300']};
    background: transparent;

    border: 1px solid ${({ theme }) => theme['green-300']};
    border-radius: 6px;

    font-weight: bold;

    cursor: pointer;

    transition:
      background 0.2s,
      color 0.2s,
      border-color 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme['green-500']};
      border-color: ${({ theme }) => theme['green-500']};
    }
  }
`
