'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'

interface DivGridProps {
  rows: number
  cols: number
  cellSize: number
  borderColor?: string
  fillColor?: string
  interactive?: boolean
  className?: string
}

interface CellState {
  row: number
  col: number
  animating: boolean
  delay: number
}

const DivGrid: React.FC<DivGridProps> = ({
  rows,
  cols,
  cellSize,
  borderColor = 'rgba(255, 255, 255, 0.1)',
  fillColor = 'rgba(255, 255, 255, 0.15)',
  interactive = true,
  className = '',
}) => {
  const [cells, setCells] = useState<CellState[]>([])
  const gridRef = useRef<HTMLDivElement>(null)

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (!interactive) return

      // Create ripple effect from clicked cell with larger spread
      const newCells: CellState[] = []
      const maxDistance = Math.max(rows, cols) * 1.5 // Increased spread distance

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const distance = Math.sqrt(Math.pow(r - row, 2) + Math.pow(c - col, 2))
          const delay = distance * 40 // Faster ripple spread

          newCells.push({
            row: r,
            col: c,
            animating: distance <= maxDistance,
            delay,
          })
        }
      }

      setCells(newCells)

      // Clear animation state after completion
      setTimeout(() => {
        setCells([])
      }, maxDistance * 40 + 600)
    },
    [rows, cols, interactive]
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive || !gridRef.current) return

      const rect = gridRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const col = Math.floor(x / cellSize)
      const row = Math.floor(y / cellSize)

      if (row >= 0 && row < rows && col >= 0 && col < cols) {
        // Trigger ripples more frequently for better visibility
        if (Math.random() > 0.7) {
          handleCellClick(row, col)
        }
      }
    },
    [cellSize, rows, cols, handleCellClick, interactive]
  )

  const getCellAnimation = (row: number, col: number) => {
    const cell = cells.find((c) => c.row === row && c.col === col)
    return cell?.animating ? cell.delay : null
  }

  return (
    <div
      ref={gridRef}
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        gap: 0,
      }}
      onMouseMove={handleMouseMove}
      onClick={(e) => {
        if (!gridRef.current) return
        const rect = gridRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const col = Math.floor(x / cellSize)
        const row = Math.floor(y / cellSize)
        handleCellClick(row, col)
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => {
        const row = Math.floor(index / cols)
        const col = index % cols
        const delay = getCellAnimation(row, col)

        return (
          <div
            key={index}
            className="relative transition-all duration-200"
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              border: `1px solid ${borderColor}`,
              backgroundColor: delay !== null ? fillColor : 'transparent',
              animation:
                delay !== null
                  ? `cell-ripple 600ms ease-out ${delay}ms forwards`
                  : undefined,
            }}
          />
        )
      })}
    </div>
  )
}

export default function BackgroundRipple() {
  const [dimensions, setDimensions] = useState({ rows: 8, cols: 27 })

  useEffect(() => {
    const updateDimensions = () => {
      const rows = Math.ceil(window.innerHeight / 56) + 2 // Add extra rows to cover fully
      const cols = Math.ceil(window.innerWidth / 56) + 2  // Add extra cols to cover fully
      setDimensions({ rows, cols })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-auto" style={{ zIndex: 1 }}>
      <div className="absolute inset-0 flex items-start justify-start">
        <DivGrid
          rows={dimensions.rows}
          cols={dimensions.cols}
          cellSize={56}
          borderColor="rgba(255, 255, 255, 0.08)"
          fillColor="rgba(255, 255, 255, 0.08)"
          interactive={true}
          className="opacity-100"
        />
      </div>
    </div>
  )
}
