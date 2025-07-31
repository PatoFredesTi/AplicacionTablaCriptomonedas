import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  animation: ${fadeIn} 0.6s ease-in-out;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const StyledTitleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${props => props.$isDark ? '#ffffff' : '#111827'};
  margin: 0;
`;

export const StyledSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${props => props.$isDark ? '#9ca3af' : '#6b7280'};
  margin: 0.25rem 0 0 0;
`;

export const StyledRefreshButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.875rem;

  &:hover {
    background-color: #059669;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #10b981, 0 0 0 4px rgba(16, 185, 129, 0.2);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const StyledTableWrapper = styled.div`
  overflow-x: auto;
  background-color: ${props => props.$isDark ? '#1f2937' : '#ffffff'};
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const StyledTable = styled.table`
  width: 100%;
  table-layout: auto;
`;

export const StyledTableHead = styled.thead`
  background-color: ${props => props.$isDark ? '#374151' : '#f9fafb'};
`;

export const StyledTableHeader = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.$isDark ? '#d1d5db' : '#6b7280'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const StyledSortableHeader = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.$isDark ? '#d1d5db' : '#6b7280'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.$isDark ? '#4b5563' : '#f3f4f6'};
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #3b82f6;
  }
`;

export const StyledSortHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StyledSortArrows = styled.div`
  display: flex;
  flex-direction: column;
  gap: -0.25rem;
`;

export const StyledSortArrow = styled.svg`
  width: 0.75rem;
  height: 0.75rem;
  transition: color 0.2s ease-in-out;
  color: ${props => {
    if (props.$active) return props.$isDark ? '#60a5fa' : '#3b82f6';
    return props.$isDark ? '#6b7280' : '#d1d5db';
  }};

  ${StyledSortableHeader}:hover & {
    color: ${props => props.$active 
      ? (props.$isDark ? '#60a5fa' : '#3b82f6')
      : (props.$isDark ? '#9ca3af' : '#9ca3af')
    };
  }
`;

export const StyledTableBody = styled.tbody`
  background-color: ${props => props.$isDark ? '#1f2937' : '#ffffff'};
  
  tr {
    border-bottom: 1px solid ${props => props.$isDark ? '#374151' : '#e5e7eb'};
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${props => props.$isDark ? '#374151' : '#f9fafb'};
    }
  }
`;

export const StyledTableCell = styled.td`
  padding: 1rem 1.5rem;
  white-space: nowrap;
  font-size: 0.875rem;
  color: ${props => props.$isDark ? '#ffffff' : '#111827'};
`;

export const StyledRankContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledRankNumber = styled.span`
  font-weight: 500;
`;

export const StyledRankIndicator = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: #3b82f6;
  border-radius: 50%;
`;

export const StyledCryptoNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const StyledCryptoLogo = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const StyledCryptoNameInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCryptoName = styled.div`
  font-weight: 500;
  color: ${props => props.$isDark ? '#ffffff' : '#111827'};
`;

export const StyledCryptoSymbol = styled.div`
  font-size: 0.875rem;
  color: ${props => props.$isDark ? '#9ca3af' : '#6b7280'};
  text-transform: uppercase;
`;

export const StyledPriceText = styled.span`
  font-family: 'Monaco', 'Consolas', monospace;
  font-weight: 500;
`;

export const StyledChangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledChangeText = styled.span`
  font-weight: 500;
  color: ${props => props.$positive 
    ? (props.$isDark ? '#34d399' : '#059669')
    : (props.$isDark ? '#f87171' : '#dc2626')
  };
`;

export const StyledTrendIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  color: ${props => props.$positive 
    ? (props.$isDark ? '#34d399' : '#059669')
    : (props.$isDark ? '#f87171' : '#dc2626')
  };
  transform: ${props => props.$positive ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

export const StyledMarketCapText = styled.span`
  font-family: 'Monaco', 'Consolas', monospace;
`;

export const StyledSortIndicator = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: ${props => props.$isDark ? '#9ca3af' : '#6b7280'};
`;

export const StyledResetButton = styled.button`
  margin-left: 0.75rem;
  color: ${props => props.$isDark ? '#60a5fa' : '#3b82f6'};
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.875rem;

  &:hover {
    text-decoration: none;
  }
`;