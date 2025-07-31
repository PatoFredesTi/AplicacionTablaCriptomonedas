import styled from 'styled-components';

export const StyledSearchContainer = styled.div`
  margin: 1.5rem 0;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const StyledSearchWrapper = styled.div`
  position: relative;
  max-width: 28rem;
  margin: 0 auto;
  background: ${props => props.$isDark 
    ? 'rgba(31, 41, 55, 0.8)' 
    : 'rgba(255, 255, 255, 0.9)'
  };
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.$isDark 
    ? 'rgba(75, 85, 99, 0.3)' 
    : 'rgba(229, 231, 235, 0.8)'
  };
  border-radius: 1rem;
  box-shadow: ${props => props.$isDark 
    ? '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)' 
    : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  };
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => props.$isDark 
      ? '0 20px 35px -5px rgba(0, 0, 0, 0.4), 0 8px 15px -3px rgba(0, 0, 0, 0.2)' 
      : '0 20px 35px -5px rgba(0, 0, 0, 0.15), 0 8px 15px -3px rgba(0, 0, 0, 0.08)'
    };
  }

  &:focus-within {
    border-color: ${props => props.$isDark ? '#60a5fa' : '#3b82f6'};
    box-shadow: ${props => props.$isDark 
      ? '0 0 0 3px rgba(96, 165, 250, 0.2), 0 20px 35px -5px rgba(0, 0, 0, 0.4)' 
      : '0 0 0 3px rgba(59, 130, 246, 0.1), 0 20px 35px -5px rgba(0, 0, 0, 0.15)'
    };
  }
`;

export const StyledSearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: ${props => props.$isDark ? '#9ca3af' : '#6b7280'};
  pointer-events: none;
  z-index: 10;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$isDark ? '#f9fafb' : '#111827'};
  
  &::placeholder {
    color: ${props => props.$isDark ? '#6b7280' : '#9ca3af'};
    font-weight: 400;
  }

  &:focus {
    &::placeholder {
      opacity: 0.7;
    }
  }
`;

export const StyledClearButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$isDark ? 'rgba(55, 65, 81, 0.6)' : 'rgba(243, 244, 246, 0.8)'};
  border: none;
  border-radius: 0.5rem;
  color: ${props => props.$isDark ? '#9ca3af' : '#6b7280'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    background: ${props => props.$isDark ? 'rgba(55, 65, 81, 0.8)' : 'rgba(229, 231, 235, 0.9)'};
    color: ${props => props.$isDark ? '#f3f4f6' : '#374151'};
    transform: translateY(-50%) scale(1.05);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const StyledSearchResults = styled.div`
  margin-top: 0.75rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.$isDark ? '#9ca3af' : '#6b7280'};
  
  span {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem 1rem;
    background: ${props => props.$isDark 
      ? 'rgba(31, 41, 55, 0.6)' 
      : 'rgba(249, 250, 251, 0.8)'
    };
    border: 1px solid ${props => props.$isDark 
      ? 'rgba(75, 85, 99, 0.3)' 
      : 'rgba(229, 231, 235, 0.6)'
    };
    border-radius: 0.75rem;
    backdrop-filter: blur(8px);
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translateY(-1px);
      box-shadow: ${props => props.$isDark 
        ? '0 4px 12px -2px rgba(0, 0, 0, 0.3)' 
        : '0 4px 12px -2px rgba(0, 0, 0, 0.1)'
      };
    }
  }
`;

export const StyledHighlight = styled.span`
  background: ${props => props.$isDark ? 'rgba(251, 191, 36, 0.3)' : 'rgba(251, 191, 36, 0.2)'};
  color: ${props => props.$isDark ? '#fbbf24' : '#d97706'};
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-weight: 600;
`;