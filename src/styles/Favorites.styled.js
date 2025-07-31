import styled, { keyframes, css } from 'styled-components';

const starPop = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.3) rotate(180deg); }
  100% { transform: scale(1) rotate(360deg); }
`;

const starGlow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(251, 191, 36, 0.3); }
  50% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.6), 0 0 30px rgba(251, 191, 36, 0.4); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

export const StyledStarIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: ${props => {
    if (props.$isFavorite) {
      return '#1f2937';
    }
    return props.$isDark ? '#9ca3af' : '#6b7280';
  }};
  transition: all 0.2s ease;
  filter: ${props => props.$isFavorite 
    ? 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' 
    : 'none'
  };
`;

export const StyledStarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: ${props => {
    if (props.$isFavorite) {
      return props.$isDark 
        ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' 
        : 'linear-gradient(135deg, #fbbf24, #f59e0b)';
    }
    return props.$isDark 
      ? 'rgba(55, 65, 81, 0.4)' 
      : 'rgba(243, 244, 246, 0.6)';
  }};
  border: 1px solid ${props => {
    if (props.$isFavorite) {
      return 'rgba(251, 191, 36, 0.5)';
    }
    return props.$isDark 
      ? 'rgba(75, 85, 99, 0.3)' 
      : 'rgba(229, 231, 235, 0.4)';
  }};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: ${props => {
      if (props.$isFavorite) {
        return '0 8px 25px rgba(251, 191, 36, 0.4), 0 4px 15px rgba(251, 191, 36, 0.2)';
      }
      return props.$isDark 
        ? '0 8px 20px rgba(0, 0, 0, 0.3)' 
        : '0 8px 20px rgba(0, 0, 0, 0.1)';
    }};

    /* Animar el icono en hover */
    ${StyledStarIcon} {
      transform: scale(1.1);
    }
  }

  &:active {
    animation: ${starPop} 0.3s ease-out;
  }

  ${props => props.$isFavorite && css`
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, transparent, rgba(251, 191, 36, 0.3), transparent);
      border-radius: 0.6rem;
      animation: ${starGlow} 2s ease-in-out infinite;
      z-index: -1;
    }
  `}
`;

export const StyledFavoritesControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  background: ${props => props.$isDark 
    ? 'rgba(31, 41, 55, 0.6)' 
    : 'rgba(255, 255, 255, 0.8)'
  };
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.$isDark 
    ? 'rgba(75, 85, 99, 0.3)' 
    : 'rgba(229, 231, 235, 0.5)'
  };
  border-radius: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${props => props.$isDark 
      ? '0 8px 25px -5px rgba(0, 0, 0, 0.3)' 
      : '0 8px 25px -5px rgba(0, 0, 0, 0.1)'
    };
  }
`;

export const StyledFavoritesCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  background: ${props => props.$isDark 
    ? 'rgba(251, 191, 36, 0.1)' 
    : 'rgba(251, 191, 36, 0.1)'
  };
  border: 1px solid ${props => props.$isDark 
    ? 'rgba(251, 191, 36, 0.3)' 
    : 'rgba(251, 191, 36, 0.2)'
  };
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.$isDark ? '#fbbf24' : '#d97706'};
  transition: all 0.2s ease;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  &:hover {
    background: ${props => props.$isDark 
      ? 'rgba(251, 191, 36, 0.15)' 
      : 'rgba(251, 191, 36, 0.15)'
    };
    transform: scale(1.02);
  }
`;

export const StyledFavoritesToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => {
    if (props.$active) {
      return props.$isDark 
        ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' 
        : 'linear-gradient(135deg, #fbbf24, #f59e0b)';
    }
    return props.$isDark 
      ? 'rgba(55, 65, 81, 0.6)' 
      : 'rgba(243, 244, 246, 0.8)';
  }};
  border: 1px solid ${props => {
    if (props.$active) {
      return 'rgba(251, 191, 36, 0.5)';
    }
    return props.$isDark 
      ? 'rgba(75, 85, 99, 0.3)' 
      : 'rgba(229, 231, 235, 0.5)';
  }};
  border-radius: 0.5rem;
  color: ${props => {
    if (props.$active) {
      return '#1f2937';
    }
    return props.$isDark ? '#f3f4f6' : '#374151';
  }};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.$active 
    ? '0 4px 15px rgba(251, 191, 36, 0.3)' 
    : 'none'
  };

  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => {
      if (props.$active) {
        return '0 8px 25px rgba(251, 191, 36, 0.4)';
      }
      return props.$isDark 
        ? '0 4px 15px rgba(0, 0, 0, 0.2)' 
        : '0 4px 15px rgba(0, 0, 0, 0.1)';
    }};

    svg {
      transform: ${props => props.$active ? 'rotate(15deg)' : 'scale(1.1)'};
    }
  }

  &:active {
    transform: translateY(0);
  }

  ${props => props.$active && css`
    animation: ${pulseGlow} 2s ease-in-out infinite;
  `}
`;

export const StyledFavoritesBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  background: ${props => props.$isDark 
    ? 'rgba(251, 191, 36, 0.15)' 
    : 'rgba(251, 191, 36, 0.1)'
  };
  border: 1px solid ${props => props.$isDark 
    ? 'rgba(251, 191, 36, 0.3)' 
    : 'rgba(251, 191, 36, 0.2)'
  };
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.$isDark ? '#fbbf24' : '#d97706'};
  animation: ${pulseGlow} 3s ease-in-out infinite;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$isDark 
      ? 'rgba(251, 191, 36, 0.2)' 
      : 'rgba(251, 191, 36, 0.15)'
    };
    transform: scale(1.02);
  }
`;

export const StyledFavoriteRowIndicator = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border-radius: 0 0.25rem 0.25rem 0;
  opacity: 0.8;
  animation: ${pulseGlow} 4s ease-in-out infinite;
`;

export const StyledFavoriteRowOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${props => props.$isDark 
    ? 'rgba(251, 191, 36, 0.02)' 
    : 'rgba(251, 191, 36, 0.01)'
  };
  border: 1px solid ${props => props.$isDark 
    ? 'rgba(251, 191, 36, 0.1)' 
    : 'rgba(251, 191, 36, 0.08)'
  };
  border-radius: 0.5rem;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${props => props.$isFavorite && css`
    opacity: 1;
  `}
`;